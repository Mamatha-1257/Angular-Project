import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpProfileComponent } from './view-emp-profile.component';

describe('ViewEmpProfileComponent', () => {
  let component: ViewEmpProfileComponent;
  let fixture: ComponentFixture<ViewEmpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
