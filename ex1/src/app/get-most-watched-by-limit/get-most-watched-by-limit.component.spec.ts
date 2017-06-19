import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMostWatchedByLimitComponent } from './get-most-watched-by-limit.component';

describe('GetMostWatchedByLimitComponent', () => {
  let component: GetMostWatchedByLimitComponent;
  let fixture: ComponentFixture<GetMostWatchedByLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMostWatchedByLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMostWatchedByLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
