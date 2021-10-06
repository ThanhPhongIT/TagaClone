import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBorderRadiusComponent } from './base-border-radius.component';

describe('BaseBorderRadiusComponent', () => {
  let component: BaseBorderRadiusComponent;
  let fixture: ComponentFixture<BaseBorderRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseBorderRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBorderRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
