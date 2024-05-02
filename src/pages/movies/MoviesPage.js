import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styles from "../../styles/MoviesPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appstyles from "../../App.module.css";
import { Button } from "react-bootstrap";
import {apiKey} from "../../apikey";
import { axiosCustom } from "../../api/axiosDefaults";
import UserRating from "../../components/UserRating";
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function MoviesPage() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const currentUser = useCurrentUser();

  const onSearchHandler = useCallback(async (query) => {
    if (!query) {
      return;
    }

    try {
      const omdbResponse = await axiosCustom.get(`http://www.omdbapi.com/?t=${query}&apiKey=${apiKey}`);
      console.log("OMDB API response:", omdbResponse.data);

      history.push(`/movies?query=${encodeURIComponent(omdbResponse.data.Title)}`);
      setData(omdbResponse.data);

      const uploadResponse = await axiosCustom.post("/movies/", {title: omdbResponse.data.Title});
      console.log("Movie added to database:", uploadResponse.data);
      
      setSearchQuery("");
    } catch (error) {
      console.error("Error searching movie:", error);
    }
  }, [history]);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearchHandler(searchQuery);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setSearchQuery(queryParam);
      onSearchHandler(queryParam);
    }
  }, [onSearchHandler]);

  return (
    <div className="pt-4">
      <div>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={handleSearch}
        >
          <Form.Control
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search a movie..."
          />
        </Form>
        <div className="margin-0 text-center">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.SB}`}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>

      {Object.keys(data).length > 0 && (
        <div className={appstyles.NewContent}>
          <div className="mt-10 w-full flex items-center justify-center">
            <div>
              <img
                className={styles.MoviePoster}
                src={data.Poster}
                alt="#"
              />
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

          <div className="pt-4">
            { currentUser && <UserRating /> }
          </div>
          
        </div>
      )}
    </div>
  );
}

export default MoviesPage;