import { createAction } from "redux-actions";

const fetchArticle = createAction("fetchArticle");
const saveArticle = createAction("saveArticle");

export { fetchArticle, saveArticle };
