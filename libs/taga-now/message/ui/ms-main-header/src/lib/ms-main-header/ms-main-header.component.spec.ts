import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsMainHeaderComponent } from './ms-main-header.component';

describe('MsMainHeaderComponent', () => {
  let component: MsMainHeaderComponent;
  let fixture: ComponentFixture<MsMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
