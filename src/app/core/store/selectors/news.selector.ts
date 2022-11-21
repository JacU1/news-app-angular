import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/models/appState.interface";

export const selectNewsFeature = (state : AppStateInterface) => state.stateData;

export const isLoadingSelector = createSelector(selectNewsFeature, (state) => state?.loading);
