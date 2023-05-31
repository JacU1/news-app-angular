import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subscription, tap} from "rxjs";
import {ISliderNews} from "../../core/models/page-carousel.model";
import {IArticle} from "../../core/models/news-api-model";
import { Store } from '@ngrx/store';
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
  public articlesForList$: Observable<IArticle[]>;

  constructor(private readonly _store: Store<AppStateInterface>) {
    this.isLoading$ = this._store.select(isLoadingSelector);
    this.articles$ = this._store.select(articlesSelector).pipe(tap(resp => console.log(resp)),map(res => res.slice(0,4)));
    this.articlesForList$ = this._store.select(articlesSelector).pipe(map(res => res.slice(0,20)));
  }

  public ngOnInit(): void {
    this._store.dispatch(homeActions.LOAD_NEWS());
  }

  public ngOnDestroy(): void {
    this._unSubscription$.unsubscribe();
  }


}
