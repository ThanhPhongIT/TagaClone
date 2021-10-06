import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxsCardComponent } from './boxs-card/boxs-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BoxsCardComponent
  ],  exports: [
    BoxsCardComponent
  ],
})
export class SharedUiBoxsCardModule {}
