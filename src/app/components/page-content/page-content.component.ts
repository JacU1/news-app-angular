import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { EVERYTHING_ENDPOINT, TOP_ENDPOINT } from 'src/app/config/constants';
import { SliderObject } from '../page-carousel/page-carousel.model';
import { ArticlesObject } from 'src/app/components/shared/services/news-API/news-api-model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass']
})
export class PageContentComponent implements OnInit {
  newsArray: Array<SliderObject> = [];
  mainContent?: ArticlesObject;

  constructor(private newsAPI: NewsApiService) { }

  ngOnInit() {
    this.newsAPI.getNews("Apple", TOP_ENDPOINT).subscribe(res => {
      this.mainContent = res[0];

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
