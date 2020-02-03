import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Meme from "../Meme/Meme";
import { createMeme } from "../../store/actions/actions";
import Backdrop from "../Backdrop/Backdrop";
import { withRouter } from "react-router-dom";

const CreateMeme = ({
  meme,
  createMeme,
  showBackdrop,
  history,
  showReadyMeme
}) => {
  useEffect(() => {
    if (showReadyMeme) {
      history.push("/ready_meme");
    }
  }, [showReadyMeme]);

  const [upperText, changeUpperText] = useState("");
  const [bottomText, changeBottomText] = useState("");

  return (
    <section className="create-meme">
      <h2 className="create-meme__heading">Create Your Meme</h2>

      <div className="create-meme__container">
        <Meme meme={meme} />

        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            createMeme(meme.id, upperText, bottomText);
          }}
        >
          <div className="form__group">
            <label htmlFor="text0" className="form__label">
              Upper Text
            </label>
            <input
              type="text"
              className="form__input"
              id="text0"
              onChange={e => changeUpperText(e.target.value)}
            />
          </div>

          <div className="form__group">
            <label htmlFor="text1" className="form__label">
              Bottom Text
            </label>
            <input
              type="text"
              className="form__input"
              id="text1"
              onChange={e => changeBottomText(e.target.value)}
            />
          </div>

          <button className="form__btn">Generate Meme</button>
        </form>
      </div>

      {showBackdrop ? <Backdrop /> : null}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    meme: state.pickMeme,
    showBackdrop: state.showBackdrop,
    showReadyMeme: state.showReadyMeme
  };
};

const actions = dispatch => {
  return {
    createMeme: (id, upperText, bottomText) =>
      dispatch(createMeme(id, upperText, bottomText))
  };
};

export default connect(mapStateToProps, actions)(withRouter(CreateMeme));
