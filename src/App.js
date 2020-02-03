import React, { useEffect } from "react";
import Templates from "./Components/Templates/Templates";
import Header from "./Components/Header/Header";
import { connect } from "react-redux";
import { fetchMemes } from "./store/actions/actions";
import { Route, withRouter } from "react-router-dom";
import CreateMeme from "./Components/CreateMeme/CreateMeme";
import ReadyMeme from "./Components/ReadyMeme/ReadyMeme";

const App = props => {
  useEffect(() => {
    props.fetchMemes();
    props.history.push("/");
  }, []);

  return (
    <div>
      <Header />

      <Route path="/create_meme" exact component={CreateMeme} />
      <Route path="/ready_meme" exact component={ReadyMeme} />
      <Route path="/" exact component={Templates} />
    </div>
  );
};

const actions = dispatch => {
  return {
    fetchMemes: () => dispatch(fetchMemes())
  };
};

export default connect(null, actions)(withRouter(App));
