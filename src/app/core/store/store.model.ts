import { IArticle } from "../models/news-api-model";

export interface NewsState {
    data: IArticle[] | any;
    loaded: boolean;
    loading: boolean;
}