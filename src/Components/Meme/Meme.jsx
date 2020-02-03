import React from "react";
import { connect } from "react-redux";
import { pickMeme } from "../../store/actions/actions";
import { withRouter } from "react-router-dom";

const Meme = ({ meme, pickMeme, history, useClick }) => {
  return (
    <div
      className="meme"
      onClick={() => {
        if (useClick) {
          history.push("/create_meme");
          pickMeme(meme);
        }
      }}
    >
      <img className="meme__img" src={meme.url} alt="Meme Image" />
    </div>
  );
};

const actions = dispatch => {
  return {
    pickMeme: meme => dispatch(pickMeme(meme))
  };
};

export default connect(null, actions)(withRouter(Meme));
