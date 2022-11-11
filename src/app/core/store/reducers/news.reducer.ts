import * as fromNews from "../actions/news.action";
import { IArticle } from "../../models/news-api-model"
import { createReducer } from "@ngrx/store";
import { on } from "events";

export interface NewsState {
    data: IArticle[];
    loaded: boolean;
    loading: boolean;
}

export const initialState : NewsState = {
    data: [],
    loaded: false,
    loading: false
}

export const reducer = createReducer(initialState, on(fromNews.LOAD_NEWS, 
    fromNews.LOAD_NEWS_FAIL, 
    fromNews.LOAD_NEWS_SUCCESS));

// export function reducer(state = initialState, action: fromNews.NewsAction): NewsState {
//     switch (action.type) {
//         case fromNews.LOAD_NEWS: {
//             return {
//                 ...state, 
//                 loading: true,
//                 loaded: false
//             }
//         }
//         case fromNews.LOAD_NEWS_SUCCESS: {
//             return {
//                 ...state, 
//                 loading: false,
//                 loaded: true
//             }
//         }
//         case fromNews.LOAD_NEWS_FAIL: {
//             return {
//                 ...state, 
//                 loading: false,
//                 loaded: false
//             }
//         }
//     }

//     return state;
// }