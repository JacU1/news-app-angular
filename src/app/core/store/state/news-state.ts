import { IArticle } from "src/app/components/shared/services/news-API/news-api-model";

export interface INewsState {
    articles: IArticle[] | null,
    selectedArticle: IArticle | null
}

export const initialState: INewsState = {
    articles: null,
    selectedArticle: null
}