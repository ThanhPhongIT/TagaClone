import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPersonalComponent } from './skill-personal.component';

describe('SkillPersonalComponent', () => {
  let component: SkillPersonalComponent;
  let fixture: ComponentFixture<SkillPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
