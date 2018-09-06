import React from "react";
import gif from "../dist/gear.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={gif}
        alt="loading Spinner"
        style={{ display: "block", width: "220px", margin: "40px auto" }}
      />
    </div>
  );
};

export default Spinner;
