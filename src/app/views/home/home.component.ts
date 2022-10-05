import { NewsApiService } from 'src/app/components/shared/services/news-API/news-api.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ISliderNews} from "../../core/models/page-carousel.model";
import {ArticlesObject} from "../../components/shared/services/news-API/news-api-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _unSubscription$: Subscription = new Subscription();
  public carouselNewsArray: Array<ISliderNews> = [];
  public mainPanelNews: ArticlesObject[] = [];

  constructor(private readonly newsService: NewsApiService) { }

  public ngOnInit(): void {
    this.getNewsForHomePageContent();
  }

  public ngOnDestroy(): void {
    this._unSubscription$.unsubscribe();
  }

  private getNewsForHomePageContent(): void {
    const carouselImages: ISliderNews[] = [];

    this._unSubscription$.add(this.newsService.getEverythingNews( "apple")
      .subscribe(news => {
        news.length = 4;
        this.mainPanelNews = news;
        console.log(this.mainPanelNews);
        news.forEach(item => {
          const sliderItem : ISliderNews = {
            image: item.urlToImage,
            title: item.title
          }
          carouselImages.push(sliderItem);
        });
        this.carouselNewsArray = carouselImages;
    }));
  }

}
