import * as fromNews from "../actions/news.action";
import { createReducer, on } from "@ngrx/store";
import { NewsState } from "../store.model";

export const initialState : NewsState = {
    data: [],
    loaded: false,
    loading: false
}

export const newsReducer = createReducer(initialState, 
    on(fromNews.LOAD_NEWS,(state) => ({...state, data: [], loaded: false, loading: true})),
    on(fromNews.LOAD_NEWS_FAIL, (state, { payload }) => ({ ...state, data: payload, loaded: false, loading: false})),
    on(fromNews.LOAD_NEWS_SUCCESS, (state, { payload }) => ({ ...state, data: payload, loaded: true, loading: false}))
);
