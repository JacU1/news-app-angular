import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/models/appState.interface";

export const selectNewsFeature = (state : AppStateInterface) => state.homePage;

export const isLoadingSelector = createSelector(selectNewsFeature, (state) =>  state.loading);
export const articlesSelector = createSelector(selectNewsFeature, (state) =>  state.data);
export const articlesErrorSelector = createSelector(selectNewsFeature, (state) =>  state.error);
