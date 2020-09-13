import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpheaderComponent } from './cmpheader.component';

describe('CmpheaderComponent', () => {
  let component: CmpheaderComponent;
  let fixture: ComponentFixture<CmpheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
