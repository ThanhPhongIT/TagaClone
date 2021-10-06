import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedWorkComponent } from './related-work.component';

describe('RelatedWorkComponent', () => {
  let component: RelatedWorkComponent;
  let fixture: ComponentFixture<RelatedWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
