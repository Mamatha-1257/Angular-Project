import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpevntsComponent } from './empevnts.component';

describe('EmpevntsComponent', () => {
  let component: EmpevntsComponent;
  let fixture: ComponentFixture<EmpevntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpevntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpevntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
