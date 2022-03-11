import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRowNewsComponent } from './first-row-news.component';

describe('FirstRowNewsComponent', () => {
  let component: FirstRowNewsComponent;
  let fixture: ComponentFixture<FirstRowNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstRowNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRowNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
