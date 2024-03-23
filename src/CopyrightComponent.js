import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "./App.module.css";
import styles from "./styles/FilterComponent.module.css"

const CopyrightComponent = ({ mobile }) => {

  return (
    <Container
      className={`${appStyles.NewContent}`}
    >
        <p className={`text-secondary ${styles.Spacer}`}>Copyright ©</p>
        <hr className={`${styles.Spacer}`}></hr>
        <a href="https://www.linkedin.com/in/liam-blake-985239225/">
            <i className={`fa-brands fa-linkedin`}></i>
        </a>
        <a href="https://github.com/Liam-WB">
            <i className={`fa-brands fa-github`}></i>
        </a>       
    </Container>
  );
};

export default CopyrightComponent;