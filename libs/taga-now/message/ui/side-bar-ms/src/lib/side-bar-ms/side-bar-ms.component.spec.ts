import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMsComponent } from './side-bar-ms.component';

describe('SideBarMsComponent', () => {
  let component: SideBarMsComponent;
  let fixture: ComponentFixture<SideBarMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
