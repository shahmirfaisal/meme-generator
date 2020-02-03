import React, { useEffect } from "react";
import Meme from "../Meme/Meme";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";
import { withRouter } from "react-router-dom";

const ReadyMeme = ({ url, closeReadyMeme, history }) => {
  useEffect(() => {
    return () => {
      closeReadyMeme();
    };
  });

  return (
    <section className="ready-meme">
      <h2 className="ready-meme__heading">Your Meme is Ready!</h2>
      <Meme meme={{ url }} />
      <p className="ready-meme__text">Right-click on the image and save it!</p>

      <button
        className="ready-meme__btn"
        onClick={() => {
          history.push("/");
        }}
      >
        Create another meme
      </button>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    url: state.readyMeme
  };
};

const actions = dispatch => {
  return {
    closeReadyMeme: () =>
      dispatch({
        type: actionTypes.TOGGLE_READY_MEME,
        value: false
      })
  };
};

export default connect(mapStateToProps, actions)(withRouter(ReadyMeme));
