import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPersonalComponent } from './exp-personal.component';

describe('ExpPersonalComponent', () => {
  let component: ExpPersonalComponent;
  let fixture: ComponentFixture<ExpPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
