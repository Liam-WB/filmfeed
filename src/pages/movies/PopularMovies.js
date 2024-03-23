import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/FilterComponent.module.css"

const PopularMovies = ({ mobile }) => {

  return (
    <Container
      className={`${appStyles.NewContent}`}
    >
        <p className={`${styles.Title}`}>Popular movies:</p>
        <hr className={`${styles.Spacer}`}></hr>
      
    </Container>
  );
};

export default PopularMovies;