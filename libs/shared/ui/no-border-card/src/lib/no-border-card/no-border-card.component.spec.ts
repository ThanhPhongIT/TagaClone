import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBorderCardComponent } from './no-border-card.component';

describe('NoBorderCardComponent', () => {
  let component: NoBorderCardComponent;
  let fixture: ComponentFixture<NoBorderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoBorderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBorderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
