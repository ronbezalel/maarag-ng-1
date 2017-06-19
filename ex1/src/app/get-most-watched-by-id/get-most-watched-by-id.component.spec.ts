import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMostWatchedByIdComponent } from './get-most-watched-by-id.component';

describe('GetMostWatchedByIdComponent', () => {
  let component: GetMostWatchedByIdComponent;
  let fixture: ComponentFixture<GetMostWatchedByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMostWatchedByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMostWatchedByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
