import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { IArticle } from 'src/app/core/models/news-api-model';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() set contentListArticles(value: IArticle[] | null) {
    this.listArticleItems = value;
  }

  public listArticleItems!: IArticle[] | null;
  public listImage: Subject<string> = new Subject<string>();
  
  public currentPage: number = 1;

  constructor() {}

  get currentPageItems(): IArticle[] {
    const startIndex = (this.currentPage - 1) * 8;
    return this.listArticleItems!.slice(startIndex + 1, startIndex + 8);
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.listArticleItems!.length / 8);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
