import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosCustom, axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import {apiKey} from "../../apikey";
import { useAlert } from "../../contexts/AlertContext"

function PostCreateForm() {
  useRedirect("loggedOut")
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    movie: "",
  });
  const [movieData, setMovieData] = useState(null)
  const { title, content, image, movie } = postData;
  const imageInput = useRef(null);
  const history = useHistory();
  const { addAlert } = useAlert();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });

    if (name === "movie" && value.trim === "") {
      setMovieData(null);
    }
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("movie", JSON.stringify(movieData));
    
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
      addAlert("Post created successfully.", "success");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        addAlert("Failed to create post. Please check that all boxes have been filled properly.", "danger");
      }
    }
  };

  const fetchMovie = async () => {
    try {
      const response = await axiosCustom.get(`http://www.omdbapi.com/?t=${movie}&&apiKey=${apiKey}`)
      setMovieData(response.data);
      alert(`Movie: ${response.data.Title} was submitted.`);
    } catch (error) {
      console.error("Error fetching movie", error);
    }   
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="text-center">
              <Form.Label>Link a movie or TV show</Form.Label>
              <Form.Control
                type="text"
                name="movie"
                value={movie}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              key={movie.id}
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              name="submit"
              onClick={fetchMovie}
            >
              Submit
            </Button>

            <div className="d-md-none">{textFields}</div>
          </Container>


        </Col>

        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;