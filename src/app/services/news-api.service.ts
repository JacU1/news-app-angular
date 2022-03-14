import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, map, mapTo, Observable, tap } from 'rxjs';
import { ArticlesObject, NewsApiResponse, SliderObject } from '../components/page-content/page-content.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  newsUrl = "https://newsapi.org/v2/everything?q=";
  API_KEY = "&apiKey=9283e9ea692e4d2489f7940f02e2d5f3"

  //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9283e9ea692e4d2489f7940f02e2d5f3

  responseArr: Array<SliderObject> = [];
  firstRowType: string = "Tesla";

  constructor(private httpClient: HttpClient) { }

  public get(url: string, options?: any) {
    return this.httpClient.get(url, options);
  }

  public getNews(type: string | null, url: string = "", options?: any){
     this.httpClient.get<NewsApiResponse>(`${this.newsUrl}${type}${this.API_KEY}`).subscribe(res => {
       res.articles.forEach(val => {
         this.responseArr.push({
          image: val.urlToImage,
          thumbImage: val.urlToImage,
          title: val.title,
          alt: val.author
        })
      })
    });

    return this.responseArr;
  }
}