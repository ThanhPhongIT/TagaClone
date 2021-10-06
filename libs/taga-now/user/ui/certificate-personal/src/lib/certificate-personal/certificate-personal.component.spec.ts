import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePersonalComponent } from './certificate-personal.component';

describe('CertificatePersonalComponent', () => {
  let component: CertificatePersonalComponent;
  let fixture: ComponentFixture<CertificatePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
