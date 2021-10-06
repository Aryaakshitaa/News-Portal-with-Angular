import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRightComponent } from './news-right.component';

describe('NewsRightComponent', () => {
  let component: NewsRightComponent;
  let fixture: ComponentFixture<NewsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
