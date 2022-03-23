import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCenterInfoComponent } from './page-center-info.component';

describe('PageCenterInfoComponent', () => {
  let component: PageCenterInfoComponent;
  let fixture: ComponentFixture<PageCenterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCenterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCenterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
