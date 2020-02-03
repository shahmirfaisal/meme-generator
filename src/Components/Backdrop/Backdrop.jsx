import React from "react";
import Spinner from "../Spinner/Spinner";

const Backdrop = () => {
  return (
    <div className="backdrop">
      <Spinner />
      <p className="backdrop__text">creating meme...</p>
    </div>
  );
};

export default Backdrop;
