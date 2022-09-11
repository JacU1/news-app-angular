import { Component, Input, OnInit } from '@angular/core';
import { SliderObject } from 'src/app/core/models/page-carousel.model';

@Component({
  selector: 'app-page-carousel',
  templateUrl: './page-carousel.component.html',
  styleUrls: ['./page-carousel.component.sass']
})
export class PageCarouselComponent {
  @Input() imgArray: SliderObject[]  = [];

  constructor() { }
}
