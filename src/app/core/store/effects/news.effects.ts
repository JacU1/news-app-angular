import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { NewsApiService } from 'src/app/components/shared/services/news-API/news-api.service';
import { StoreActionsEnum } from '../../models/news.enums';

@Injectable()
export class NewsEffects {

  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType(StoreActionsEnum.Load_News),
    mergeMap(() => this.newsService.getEverythingNews("apple")
      .pipe(
        map(news => ({ type: StoreActionsEnum.Load_News_Success, payload: news })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private readonly newsService : NewsApiService) { }
}
