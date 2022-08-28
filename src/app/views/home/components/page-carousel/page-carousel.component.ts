import { Component, Input, OnInit } from '@angular/core';
import { SliderObject } from './page-carousel.model';

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
