import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmploginComponent } from './cmplogin.component';

describe('CmploginComponent', () => {
  let component: CmploginComponent;
  let fixture: ComponentFixture<CmploginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmploginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
