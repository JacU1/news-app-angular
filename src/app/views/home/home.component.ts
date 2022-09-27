import { NewsApiService } from 'src/app/components/shared/services/news-API/news-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  carouselNewsArray: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    console.log("Component loaded");
  }

}
