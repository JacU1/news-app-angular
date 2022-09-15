import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNewsComponent implements OnInit {
  @Input() newsItem : any;

  constructor() {}

  ngOnInit(): void {}
}
