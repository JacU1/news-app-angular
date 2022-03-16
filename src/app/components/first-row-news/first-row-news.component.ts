import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TOP_ENDPOINT } from 'src/app/config/constants';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-first-row-news',
  templateUrl: './first-row-news.component.html',
  styleUrls: ['./first-row-news.component.sass']
})
export class FirstRowNewsComponent implements OnInit {
  
  infoObject: any;

  constructor(private newsAPI: NewsApiService) { }

  ngOnInit(): void {
    this.newsAPI.getNews("Tesla", TOP_ENDPOINT).subscribe(res => {
      this.infoObject = res[0];
    })
  }




}
