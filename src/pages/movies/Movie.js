import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Movie = (props) => {
  const {
    id,
    title,
    movie_data,
  } = props;

  const currentUser = useCurrentUser();
  const history = useHistory();


  return (
    <Card className={styles.Movie}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/movies/${movie_id}`}>
            <Avatar src={movie_poster} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
          </div>
        </Media>
      </Card.Body>
      
      <Link to={`/movies/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.MovieBar}>
          <Link to={`/movies/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movie;