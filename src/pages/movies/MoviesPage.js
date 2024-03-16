import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/MoviesPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Button } from "react-bootstrap";


function MoviesPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const onSearchHandler = () => {};

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
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={onSearchHandler}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}


export default MoviesPage;