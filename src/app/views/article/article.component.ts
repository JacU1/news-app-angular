import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/models/appState.interface';
import { selectedArticle } from 'src/app/core/store';
import * as homeActions from '../../core/store/actions/news.action';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {

  constructor(private readonly _store: Store<AppStateInterface>,
              private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._store.select(selectedArticle(this._activatedRoute.snapshot.params['title'])) 
    ?? this._store.dispatch(homeActions.LOAD_NEWS());
  }

}
