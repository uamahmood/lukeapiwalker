import React, { Fragment } from "react";

import "./App.css";
import { Router, navigate } from "@reach/router";
import Display from "./components/Display";
import Activity from "./components/Activity";

function App() {
  const clickHandler = (e) => {
    navigate("/");
  };
  return (
    <Fragment>
      <div className="container">
        <h1 className="display-3">Heyyyo</h1>
        <p className="lead">Welcome,it's all about Star Wars in here!</p>
        <h4>Never watched the movie but I'll give it a try , I promise</h4>
        <hr className="my-5"></hr>
        <p>When you're ready start clicking or/and typing :~| </p>
        <input
          className="btn btn-lg btn-info"
          value="Home"
          onClick={clickHandler}
        />
      </div>
      <Router>
        <Display exact path="/" />
        <Activity exact path="/:category/:id" component={Activity} />
      </Router>
    </Fragment>
  );
}

export default App;