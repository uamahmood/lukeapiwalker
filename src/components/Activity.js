import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Error from "./Error";

const Activity = (props) => {
  const [input, setInput] = useState({
    id: props.id,
    category: props.category,
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/${input.category}/${input.id}`)
      .then((response) => {
        setResults(response.data);
        console.log(response);
      })

      .catch((err) => setError(true));
    navigate(`/${input.category}/${input.id}`);
  };

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${input.category}/${input.id}`)
      .then((response) => {
        setResults(response.data);
        console.log(response);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <div className="container m-5">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-6"></div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <select
                className="custom-select"
                name="category"
                onChange={changeHandler}
              >
                <option selected>Choose a Category</option>
                <option value="people">Person</option>
                <option value="planets">Planet</option>
                <option value="starships">Starship</option>
              </select>
            </div>
            <div className="form-group">
              <h3>To find a target,number goes bellow! </h3>
              <input
                className="form-control form-control-sm"
                type=" text"
                name="id"
                onChange={changeHandler}
              />
              <br />
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
      {!error ? (
        Object.keys(results).map((item) => (
          <p>
            {item}: {results[item]}
          </p>
        ))
      ) : (
        <Error />
      )}
    </div>
  );
};
export default Activity;