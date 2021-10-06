import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupEmployeeModalComponent } from './add-group-employee-modal.component';

describe('AddGroupEmployeeModalComponent', () => {
  let component: AddGroupEmployeeModalComponent;
  let fixture: ComponentFixture<AddGroupEmployeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupEmployeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
