import { Component, OnInit } from '@angular/core';
import {IMG_COLLECTION} from './page-content.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.sass']
})
export class PageContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection = IMG_COLLECTION;
}
