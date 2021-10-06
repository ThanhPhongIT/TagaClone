import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiIconModule } from '@taga-now/shared/ui/icon';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedUiIconModule],
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent],
})
export class SharedUiSearchInputModule {}
