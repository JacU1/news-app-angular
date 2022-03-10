import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  //GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=9283e9ea692e4d2489f7940f02e2d5f3


  constructor(private httpClient: HttpClient) { }

  getBitcoinNews(){
    //this.httpClient.get()
  }


}
