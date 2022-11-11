import { createAction, props } from "@ngrx/store";
import { IArticle } from "src/app/core/models/news-api-model";

export const LOAD_NEWS = createAction('[HOME] Load News', props<{payload: IArticle}>());
export const LOAD_NEWS_FAIL = createAction('[HOME] Load News Fail', props<{payload: IArticle}>());
export const LOAD_NEWS_SUCCESS = createAction('[HOME] Load News Success', props<{payload: IArticle}>());
