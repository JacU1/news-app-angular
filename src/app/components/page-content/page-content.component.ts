import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { SliderObject } from './page-content.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass']
})
export class PageContentComponent implements OnInit {
  imgCollection: Array<SliderObject> = [];

  constructor(private newsAPI: NewsApiService) { }

  ngOnInit() {
    this.imgCollection = this.newsAPI.getNews("Apple");
    console.log(this.imgCollection);
  }
}
