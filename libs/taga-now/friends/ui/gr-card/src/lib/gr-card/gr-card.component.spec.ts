import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrCardComponent } from './gr-card.component';

describe('GrCardComponent', () => {
  let component: GrCardComponent;
  let fixture: ComponentFixture<GrCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
