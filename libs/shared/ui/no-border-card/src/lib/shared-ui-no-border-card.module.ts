import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoBorderCardComponent } from './no-border-card/no-border-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NoBorderCardComponent],
  exports: [NoBorderCardComponent],
})
export class SharedUiNoBorderCardModule {}
