import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SliderImage } from 'src/app/core/models/page-carousel.model';

@Component({
  selector: 'app-page-carousel',
  templateUrl: './page-carousel.component.html',
  styleUrls: ['./page-carousel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCarouselComponent {
  @Input() sliderImages: SliderImage[]  = [];

  constructor() { }
}
