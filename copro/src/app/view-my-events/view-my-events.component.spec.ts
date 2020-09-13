import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyEventsComponent } from './view-my-events.component';

describe('ViewMyEventsComponent', () => {
  let component: ViewMyEventsComponent;
  let fixture: ComponentFixture<ViewMyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
