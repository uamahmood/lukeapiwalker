import React from "react";
import { navigate } from "@reach/router";

export default function Error() {
  const clickHandler = (e) => {
    navigate("/");
  };
  return (
    <div>
      <input
        className="btn btn-danger"
        value="Dismiss"
        onClick={clickHandler}
      />
      <h1>404</h1>
      <h3>NO,NO,NO,I think you're lost</h3>
    </div>
  );
}