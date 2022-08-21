import { Component, Input, OnInit } from '@angular/core';
import { ArticlesObject } from 'src/app/components/shared/services/news-API/news-api-model';

@Component({
  selector: 'app-page-center-info',
  templateUrl: './page-center-info.component.html',
  styleUrls: ['./page-center-info.component.sass']
})
export class PageCenterInfoComponent implements OnInit {
  @Input() mainContent: ArticlesObject | null | undefined

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.mainContent);
  }

}
