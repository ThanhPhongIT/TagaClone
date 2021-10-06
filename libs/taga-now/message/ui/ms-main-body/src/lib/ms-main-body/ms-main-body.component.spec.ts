import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsMainBodyComponent } from './ms-main-body.component';

describe('MsMainBodyComponent', () => {
  let component: MsMainBodyComponent;
  let fixture: ComponentFixture<MsMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
