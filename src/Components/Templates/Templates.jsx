import React from "react";
import Meme from "../Meme/Meme";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";

const Templates = ({ memes, showSpinner }) => {
  return (
    <section className="templates">
      <h2 className="templates__heading">Pick an Image to make a Meme</h2>

      {showSpinner ? (
        <Spinner />
      ) : (
        <section className="templates__container">
          {memes
            ? memes.map((meme, i) => <Meme key={i} meme={meme} useClick />)
            : null}
        </section>
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    memes: state.memes,
    showSpinner: state.showSpinner
  };
};

export default connect(mapStateToProps)(Templates);
