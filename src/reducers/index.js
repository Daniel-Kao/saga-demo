import { handleActions } from "redux-actions";
import { increment, saveArticle } from "../actions";

const initialState = {
  name: "daniel",
  article: {},
  count: 0
};

const reducer = handleActions(
  {
    [increment]: (state, action) => ({
      ...state,
      count: state.count + 1
    }),
    [saveArticle]: (state, action) => ({
      ...state,
      article: action.payload
    })
  },
  initialState
);

export default reducer;
