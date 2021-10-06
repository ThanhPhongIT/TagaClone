import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSidebarCardComponent } from './ms-sidebar-card.component';

describe('MsSidebarCardComponent', () => {
  let component: MsSidebarCardComponent;
  let fixture: ComponentFixture<MsSidebarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsSidebarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsSidebarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
