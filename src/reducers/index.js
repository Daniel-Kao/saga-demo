import { handleActions } from "redux-actions";
import { saveArticle } from "../actions";

const initialState = {
  name: "daniel",
  article: 0
};

const reducer = handleActions(
  {
    [saveArticle]: (state, action) => {
      return {
        ...state,
        article: action.payload.res
      };
    }
  },
  initialState
);

export default reducer;
