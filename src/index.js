import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://api.imgflip.com";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
