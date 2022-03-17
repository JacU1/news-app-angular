import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { TOP_ENDPOINT } from 'src/app/config/constants';
import { SliderObject } from '../page-carousel/page-carousel.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass']
})
export class PageContentComponent implements OnInit {
  newsArray: Array<SliderObject> = [];

  constructor(private newsAPI: NewsApiService) { }

  ngOnInit() {
    this.newsAPI.getNews("Apple", TOP_ENDPOINT).subscribe(res => {
      res.map(item => {
        this.newsArray.push({
          image: item.urlToImage,
          thumbImage: item.urlToImage,
          alt: item.author,
          title: item.title
        })
      })
    });
  }
}
