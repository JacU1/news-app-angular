import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';
import { SliderObject } from '../page-content/page-content.model';

@Component({
  selector: 'app-first-row-news',
  templateUrl: './first-row-news.component.html',
  styleUrls: ['./first-row-news.component.sass']
})
export class FirstRowNewsComponent implements OnInit {
  
  image: string = "";

  constructor(private newsAPI: NewsApiService) { }

  ngOnInit(): void {
    this.image = "https://s.yimg.com/os/creatr-uploaded-images/2022-02/ca82d5a0-9496-11ec-a3ff-ff7415fb976b";
  }

}
