import { createSelector } from "@ngrx/store";
import { NewsState } from "../store.model";
import { IArticle } from "src/app/core/models/news-api-model";

export const selectNews = (state : NewsState) => state.data;

export const selectAppleNews = createSelector(selectNews, (allNews: IArticle | any) => {})
