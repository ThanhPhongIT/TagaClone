import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillPersonalComponent } from './skill-personal/skill-personal.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [SkillPersonalComponent],
  exports: [SkillPersonalComponent],
})
export class TagaNowUserUiSkillPersonalModule {}
