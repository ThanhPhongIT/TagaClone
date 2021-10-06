import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpPersonalComponent } from './exp-personal/exp-personal.component';
import { SharedUiBaseCardInfoModule } from '@taga-now/shared/ui/base-card-info';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SharedUiBaseCardInfoModule, SvgIconsModule],
  declarations: [ExpPersonalComponent],
  exports: [ExpPersonalComponent],
})
export class TagaNowUserUiExpPersonalModule {}
