import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesPersonalComponent } from './activities-personal.component';

describe('ActivitiesPersonalComponent', () => {
  let component: ActivitiesPersonalComponent;
  let fixture: ComponentFixture<ActivitiesPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
