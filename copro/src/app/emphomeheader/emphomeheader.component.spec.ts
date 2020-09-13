import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphomeheaderComponent } from './emphomeheader.component';

describe('EmphomeheaderComponent', () => {
  let component: EmphomeheaderComponent;
  let fixture: ComponentFixture<EmphomeheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmphomeheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphomeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
