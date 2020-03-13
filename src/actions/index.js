import { createAction } from "redux-actions";

const fetchArticle = createAction("fetchArticle");
const saveArticle = createAction("saveArticle");
const increment = createAction("increment");
const incrementCount = createAction("incrementCount");
const loginRequest = createAction("loginRequest");

export { fetchArticle, saveArticle, increment, incrementCount, loginRequest };
