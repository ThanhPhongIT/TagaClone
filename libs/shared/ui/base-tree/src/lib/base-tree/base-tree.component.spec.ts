import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTreeComponent } from './base-tree.component';

describe('BaseTreeComponent', () => {
  let component: BaseTreeComponent;
  let fixture: ComponentFixture<BaseTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
