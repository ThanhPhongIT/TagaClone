import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickEmployeeComponent } from './pick-employee.component';

describe('PickEmployeeComponent', () => {
  let component: PickEmployeeComponent;
  let fixture: ComponentFixture<PickEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
