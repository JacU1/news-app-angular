import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { IArticle } from 'src/app/core/models/news-api-model';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit, OnChanges {
  @Input() contentListArticles?: IArticle[] | null;

  public listArticleItems?: IArticle[] | null = [];
  public listImage: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.contentListArticles);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["contentListArticles"]){
      console.log(this.contentListArticles);
      this.listArticleItems = this.contentListArticles;
    }
  }

}
