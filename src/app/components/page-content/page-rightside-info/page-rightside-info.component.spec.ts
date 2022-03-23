import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRightsideInfoComponent } from './page-rightside-info.component';

describe('PageRightsideInfoComponent', () => {
  let component: PageRightsideInfoComponent;
  let fixture: ComponentFixture<PageRightsideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRightsideInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRightsideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
