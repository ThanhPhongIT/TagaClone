import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardCompanyComponent } from './base-card-company.component';

describe('BaseCardCompanyComponent', () => {
  let component: BaseCardCompanyComponent;
  let fixture: ComponentFixture<BaseCardCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCardCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
