import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/MoviesPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button } from "react-bootstrap";
import {apiKey} from "../../apikey";
import { axiosCustom } from "../../api/axiosDefaults";


function MoviesPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const onSearchHandler = () => {
    if (!query) {
      return;
    }

    const fetchMovie = async () => {
      const response = await axiosCustom.get(`http://www.omdbapi.com/?t=${query}&&apiKey=${apiKey}`)
      setData(response.data);
      console.log(response.data);
    };

    fetchMovie();
    setQuery("");
  };

  return (
    <div className="pt-4">
      <div>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search a movie..."
          />
        </Form>
        <div className="margin-0 text-center">
          <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Shadow}`}
          onClick={onSearchHandler}
          >
            Search
          </Button>
        </div>
      </div>

      { Object.keys (data).length > 0 &&
        <div className="mt-10 w-full flex items-center justify-center">
        <div>
          <img src={data.Poster} alt="#" />
        </div>
        <div className="ml-5 bg-slate-200">
          <h1>Title: {data.Title}</h1>
          <div className="pt-2" />
          <p>Director: {data.Director}</p>
          <div className="pt-2" />
          <p>Genre: {data.Genre}</p>
          <div className="pt-2" />
          <p>Year: {data.Year}</p>
          <div className="pt-2" />
          <p>Country: {data.Country}</p>
          <div className="pt-2" />
          <p>Actors: {data.Actors}</p>
          <div className="pt-2" />
          <p>Language: {data.Language}</p>
          <div className="pt-2" />
          <p>Rating: {data.imdbRating}</p>
          <div className="pt-2" />
          <p>Plot: {data.Plot}</p>
          <div className="pt-2" />
        </div>
      </div>
      }
    </div>
  );
}


export default MoviesPage;