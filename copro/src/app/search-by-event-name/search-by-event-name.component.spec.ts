import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByEventNameComponent } from './search-by-event-name.component';

describe('SearchByEventNameComponent', () => {
  let component: SearchByEventNameComponent;
  let fixture: ComponentFixture<SearchByEventNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByEventNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByEventNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
