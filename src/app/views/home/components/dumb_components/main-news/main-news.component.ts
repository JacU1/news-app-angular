import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import {IArticle} from "../../../../../core/models/news-api-model";

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsComponent implements OnChanges {
  @Input() mainPanelNewsArray : IArticle[] = [];
  @Input() isLoading: boolean | null = false;

  public newsItem?: IArticle;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isLoading);
    console.log(this.mainPanelNewsArray);
    this.newsItem = this.mainPanelNewsArray[0];
  }
}
