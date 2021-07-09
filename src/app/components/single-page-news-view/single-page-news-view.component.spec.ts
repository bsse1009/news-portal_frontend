import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageNewsViewComponent } from './single-page-news-view.component';

describe('SinglePageNewsViewComponent', () => {
  let component: SinglePageNewsViewComponent;
  let fixture: ComponentFixture<SinglePageNewsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePageNewsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageNewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
