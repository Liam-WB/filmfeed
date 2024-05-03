import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/UserRating.module.css"


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


function UserRating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div className={`${styles.Container}`}>
      <h3> Rate this movie: </h3>
      <div className={`${styles.Star}`}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
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
      >
        Submit
      </button>
      
    </div>
  );
};

export default UserRating;