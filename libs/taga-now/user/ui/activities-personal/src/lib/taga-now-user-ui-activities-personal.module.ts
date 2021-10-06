import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesPersonalComponent } from './activities-personal/activities-personal.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { SharedUiBaseCardInfoModule } from '@taga-now/shared/ui/base-card-info';

@NgModule({
  imports: [CommonModule, SharedUiBaseCardInfoModule, SvgIconsModule],
  declarations: [ActivitiesPersonalComponent],
  exports: [ActivitiesPersonalComponent],
})
export class TagaNowUserUiActivitiesPersonalModule {}
