import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMostWatchedByLanguageComponent } from './get-most-watched-by-language.component';

describe('GetMostWatchedByLanguageComponent', () => {
  let component: GetMostWatchedByLanguageComponent;
  let fixture: ComponentFixture<GetMostWatchedByLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMostWatchedByLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMostWatchedByLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
