import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ArticlesObject, NewsApiResponse } from '../services/news-api-model';
import { API_KEY, API_URL } from '../config/constants';

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {

  constructor(private httpClient: HttpClient) { }

  public getNews(topic?: string, type?: string, options?: any) : Observable<ArticlesObject[]>{
    return this.httpClient.get<NewsApiResponse>(`${API_URL}${type}?q=${topic}&apiKey=${API_KEY}`)
      .pipe(
        map(res => {
          return res.articles
        })
      )}
}
