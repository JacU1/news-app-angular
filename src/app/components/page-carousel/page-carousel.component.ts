import { Component, Input, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { SliderObject } from './page-carousel.model';
import { TOP_ENDPOINT } from 'src/app/config/constants';

@Component({
  selector: 'app-page-carousel',
  templateUrl: './page-carousel.component.html',
  styleUrls: ['./page-carousel.component.sass']
})
export class PageCarouselComponent implements OnInit {
  @Input() imgArray: Array<SliderObject> = [] 

  constructor() { }

  ngOnInit() {
  }
}
