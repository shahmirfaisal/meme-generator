import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as personalInfo from "../../personal-info";

export const fetchMemes = () => {
  return dispatch => {
    dispatch({ type: actionTypes.SHOW_SPINNER });

    axios.get("/get_memes").then(res => {
      dispatch({ type: actionTypes.FETCH_MEMES, data: res.data.data.memes });
      dispatch({ type: actionTypes.CLOSE_SPINNER });
    });
  };
};

export const pickMeme = meme => {
  return {
    type: actionTypes.PICK_MEME,
    meme
  };
};

const transformData = obj => {
  let data = Object.entries(obj).map(([key, value]) => `${key}=${value}`);

  return `?${data.join("&")}`;
};

export const createMeme = (id, upperText, bottomText) => {
  return dispatch => {
    dispatch({ type: actionTypes.SHOW_BACKDROP });

    const data = {
      template_id: id,
      username: personalInfo.username,
      password: personalInfo.password,
      text0: upperText,
      text1: bottomText
    };

    axios
      .post(`/caption_image${transformData(data)}`)
      .then(res => {
        dispatch({ type: actionTypes.CREATE_MEME, data: res.data.data.url });
        dispatch({ type: actionTypes.CLOSE_BACKDROP });
        dispatch({ type: actionTypes.TOGGLE_READY_MEME, value: true });
      })
      .catch(er => console.log(er));
  };
};
