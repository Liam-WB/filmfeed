import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/UserRating.module.css";
import { axiosCustom } from "../api/axiosDefaults";
import { useAlert } from "../contexts/AlertContext";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


function UserRating({ title }) {
  const [movieData, setMovieData] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const { addAlert } = useAlert();

  useEffect(() => {
    const fetchMovieData = async () => {
        try {
            const { data } = await axiosCustom.get(`/movies/${title}/`);
            setMovieData(data);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    fetchMovieData();
  }, [title]);

  const handleStarClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosCustom.patch(`/movies/${title}/`, {
        user_ratings: currentValue
      });
      console.log("Rating submitted successfully:", response.data);
      addAlert("Movie rating submitted!", "success");
    } catch (error) {
      console.error("Error submitting rating:", error);
      addAlert("Error! Rating submission failed. Please try again later.", "danger")
    }
  };

  return (
    <div className={`${styles.Container}`}>
      {movieData && (
        <>
          <h3> Rate {movieData.title}: </h3>
          <div className={`${styles.Star}`}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleStarClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
              )
            })}
          </div>

          <button
            className={`${styles.Button}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      )}

    </div>
  );
};

export default UserRating;