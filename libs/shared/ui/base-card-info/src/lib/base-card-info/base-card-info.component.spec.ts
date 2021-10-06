import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardInfoComponent } from './base-card-info.component';

describe('BaseCardInfoComponent', () => {
  let component: BaseCardInfoComponent;
  let fixture: ComponentFixture<BaseCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
