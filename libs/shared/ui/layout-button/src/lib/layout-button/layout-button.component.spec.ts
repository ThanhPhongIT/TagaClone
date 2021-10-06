import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutButtonComponent } from './layout-button.component';

describe('LayoutButtonComponent', () => {
  let component: LayoutButtonComponent;
  let fixture: ComponentFixture<LayoutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
