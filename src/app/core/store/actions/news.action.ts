import { createAction, props } from "@ngrx/store";
import { IArticle } from "src/app/core/models/news-api-model";

export const LOAD_NEWS = createAction('[Home Page] Load News', props<{payload: any}>());
export const LOAD_NEWS_FAIL = createAction('[Home Page / API] Load News Fail', props<{payload: any}>());
export const LOAD_NEWS_SUCCESS = createAction('[Home Page / API] Load News Success', props<{payload: IArticle[]}>());
