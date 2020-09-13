import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesForEventComponent } from './employees-for-event.component';

describe('EmployeesForEventComponent', () => {
  let component: EmployeesForEventComponent;
  let fixture: ComponentFixture<EmployeesForEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesForEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesForEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
