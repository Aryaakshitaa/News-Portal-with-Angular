import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLeftComponent } from './news-left.component';

describe('NewsLeftComponent', () => {
  let component: NewsLeftComponent;
  let fixture: ComponentFixture<NewsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
