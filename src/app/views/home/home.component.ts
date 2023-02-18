import { NewsApiService } from 'src/app/components/shared/services/news-API/news-api.service';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, of, Subscription, take} from "rxjs";
import {ISliderNews} from "../../core/models/page-carousel.model";
import {IArticle} from "../../core/models/news-api-model";
import { select, Store } from '@ngrx/store';
import * as homeActions from '../../core/store/actions/news.action';
import { articlesSelector, isLoadingSelector, selectNewsFeature } from 'src/app/core/store';
import { AppStateInterface } from 'src/app/core/models/appState.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _unSubscription$: Subscription = new Subscription();
  public carouselNewsArray: Array<ISliderNews> = [];
  public mainPanelNews: IArticle[] = [];
  public isLoading$: Observable<boolean>;
  public articles$: Observable<IArticle[]>;

  constructor(private readonly newsService: NewsApiService, private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.articles$ = this.store.select(articlesSelector).pipe(map(res => res.slice(0,4)));
  }

  public ngOnInit(): void {
    this.store.dispatch(homeActions.LOAD_NEWS());
  }

  public ngOnDestroy(): void {
    this._unSubscription$.unsubscribe();
  }


}
