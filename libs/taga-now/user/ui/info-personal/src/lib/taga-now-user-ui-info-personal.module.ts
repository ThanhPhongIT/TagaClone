import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ReactiveComponentModule } from '@ngrx/component';
@NgModule({
  imports: [CommonModule, SvgIconsModule, ReactiveComponentModule],
  declarations: [InfoPersonalComponent],
  exports: [InfoPersonalComponent],
})
export class TagaNowUserUiInfoPersonalModule {}
