import { IArticle , INewsApiResponse } from '../../../../core/models/news-api-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import { API_KEY, API_URL } from 'src/app/core/config/constants';
@Injectable()

export class NewsApiService {

  constructor(private httpClient: HttpClient) { }

  public getEverythingNews(topic: string) : Observable<IArticle[]> {
    return this.httpClient.get<INewsApiResponse>(`${API_URL}everything?q=${topic}&apiKey=${API_KEY}`)
      .pipe(
        tap(res => console.log(res)),
        map(res => {return res.articles})
      )};

  public getTopheadlinesNews(topic: string): Observable<IArticle[]> {
    return this.httpClient.get<INewsApiResponse>(`${API_URL}top-headlines?q=${topic}&apiKey=${API_KEY}`)
      .pipe(
        map(res => {return res.articles})
      )};

}
