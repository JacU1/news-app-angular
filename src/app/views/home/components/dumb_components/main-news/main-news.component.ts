import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticlesObject} from "../../../../../components/shared/services/news-API/news-api-model";

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsComponent implements OnChanges {
  @Input() mainPanelNewsArray : ArticlesObject[] = [];

  public newsItem?: ArticlesObject;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mainPanelNewsArray);
    this.newsItem = this.mainPanelNewsArray[0];
  }
}
