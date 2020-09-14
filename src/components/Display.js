import React, { useState } from "react";
import { navigate } from "@reach/router";

const Display = () => {
  const [input, setInput] = useState({
    id: "",
    category: "people",
  });
  const handleCategory = (e) => {
    const newCategory = e.target.value;
    setInput({ ...input, [e.target.name]: newCategory });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${input.category}/${input.id}`);
  };
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-6"></div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <h3>Choose a Category: </h3>
              <select
                className="custom-select"
                name="category"
                onChange={handleCategory}
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
    </div>
  );
};
export default Display;