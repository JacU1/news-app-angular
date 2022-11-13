import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IArticle} from "../../../../../core/models/news-api-model";

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsComponent implements OnChanges {
  @Input() mainPanelNewsArray : IArticle[] = [];

  public newsItem?: IArticle;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mainPanelNewsArray);
    this.newsItem = this.mainPanelNewsArray[0];
  }
}
