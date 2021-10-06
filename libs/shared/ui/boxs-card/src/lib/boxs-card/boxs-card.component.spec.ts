import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsCardComponent } from './boxs-card.component';

describe('BoxsCardComponent', () => {
  let component: BoxsCardComponent;
  let fixture: ComponentFixture<BoxsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
