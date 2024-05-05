import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import styles from "../../styles/MoviesPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import appstyles from "../../App.module.css";
import { Button } from "react-bootstrap";
import { apiKey } from "../../apikey";
import { axiosCustom } from "../../api/axiosDefaults";
import UserRating from "../../components/UserRating";
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const [averageRating, setAverageRating] = useState(0);
  const [currentMovieTitle, setCurrentMovieTitle] = useState("");
  const currentUser = useCurrentUser();

  const onSearchHandler = useCallback(async (query) => {
    if (!query) {
      return;
    }

    try {
      const omdbResponse = await axiosCustom.get(`http://www.omdbapi.com/?t=${query}&apiKey=${apiKey}`);
      console.log("OMDB API response:", omdbResponse.data);

      const title = omdbResponse.data.Title;
      setCurrentMovieTitle(title);
      history.push(`/movies?query=${encodeURIComponent(omdbResponse.data.Title)}`);
      setData(omdbResponse.data);

      const uploadResponse = await axiosCustom.post("/movies/", {title: omdbResponse.data.Title});
      console.log("Movie added to database:", uploadResponse.data);
      
      setSearchQuery("");
      
    } catch (error) {
      console.error("Error searching movie, or movie already exists:", error);
    }
  }, [history]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setSearchQuery(queryParam);
      onSearchHandler(queryParam);
    }
  }, [location.search, onSearchHandler]);

  useEffect(() => {
    const fetchAverageRating = async () => {
      if (currentMovieTitle) {
        try {
          const averageRatingResponse = await axiosCustom.get(`/movies/${encodeURIComponent(currentMovieTitle)}`);
          setAverageRating(averageRatingResponse.data.average_rating);
        } catch (error) {
          console.error("Error fetching average rating:", error);
        }
      }
    };
  
    fetchAverageRating();
  }, [currentMovieTitle]);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearchHandler(searchQuery);
  };

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
            <div className="pt-4" />
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
              <p>User Rating (1-5 stars): {Math.round(averageRating*10)/10}</p>
              <div className="pt-2" />
            </div>
          </div>

          <div className="pt-4">
            { currentUser && <UserRating title={currentMovieTitle} />}
          </div>
          
        </div>
      )}
    </div>
  );
}

export default MoviesPage;