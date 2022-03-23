import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeftsideInfoComponent } from './page-leftside-info.component';

describe('PageLeftsideInfoComponent', () => {
  let component: PageLeftsideInfoComponent;
  let fixture: ComponentFixture<PageLeftsideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLeftsideInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLeftsideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
