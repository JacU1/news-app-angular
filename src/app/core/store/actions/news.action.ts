import { Action } from "@ngrx/store";
import { IArticle } from "src/app/core/models/news-api-model";

export const LOAD_NEWS = '[HOME] Load News';
export const LOAD_NEWS_FAIL = '[HOME] Load News Fail';
export const LOAD_NEWS_SUCCESS = '[HOME] Load News Success';

export class LoadNews implements Action {
    readonly type = LOAD_NEWS;
}

export class LoadNewsFail implements Action {
    readonly type = LOAD_NEWS_FAIL;
    constructor(public payload: any){}
}

export class LoadNewsSuccess implements Action {
    readonly type = LOAD_NEWS_SUCCESS;
    constructor(public payload: IArticle[]){}
}

export type NewsAction = LoadNews | LoadNewsFail | LoadNewsSuccess;