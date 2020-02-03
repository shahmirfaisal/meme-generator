import * as actionTypes from "../actions/actionTypes";

const initialState = {
  memes: null,
  showSpinner: false,
  pickMeme: "",
  readyMeme: "",
  showBackdrop: false,
  showReadyMeme: false
};

export default function reducer(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.FETCH_MEMES:
      return {
        ...state,
        memes: action.data
      };

    case actionTypes.SHOW_SPINNER:
      return {
        ...state,
        showSpinner: true
      };

    case actionTypes.CLOSE_SPINNER:
      return {
        ...state,
        showSpinner: false
      };

    case actionTypes.PICK_MEME:
      return {
        ...state,
        pickMeme: action.meme
      };

    case actionTypes.CREATE_MEME:
      return {
        ...state,
        readyMeme: action.data
      };

    case actionTypes.SHOW_BACKDROP:
      return {
        ...state,
        showBackdrop: true
      };

    case actionTypes.CLOSE_BACKDROP:
      return {
        ...state,
        showBackdrop: false
      };

    case actionTypes.TOGGLE_READY_MEME:
      return {
        ...state,
        showReadyMeme: action.value
      };
  }

  return state;
}
