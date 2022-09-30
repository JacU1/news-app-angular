import { NewsApiService } from 'src/app/components/shared/services/news-API/news-api.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _unSubscription$: Subscription = new Subscription();

  public carouselNewsArray: Array<any> = [];

  constructor(private readonly newsService: NewsApiService) { }

  public ngOnInit(): void {
    this.getNewsForHomePageContent();
  }

  public ngOnDestroy(): void {
    this._unSubscription$.unsubscribe();
  }

  private getNewsForHomePageContent(): void {
    this._unSubscription$.add(this.newsService.getNews("everything", "apple").subscribe(res => {
      console.log(res);
    }));
  }

}
