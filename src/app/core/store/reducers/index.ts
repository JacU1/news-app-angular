import { ActionReducerMap } from '@ngrx/store';
import * as fromNews from './news.reducer';

export interface HomeState {
    news: fromNews.NewsState
}

export const reucers: ActionReducerMap<HomeState> = {
    news: fromNews.reducer,
}