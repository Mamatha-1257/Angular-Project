import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompcodeComponent } from './getcompcode.component';

describe('GetcompcodeComponent', () => {
  let component: GetcompcodeComponent;
  let fixture: ComponentFixture<GetcompcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcompcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
