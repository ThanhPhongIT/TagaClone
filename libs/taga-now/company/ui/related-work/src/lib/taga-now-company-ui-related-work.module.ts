import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedWorkComponent } from './related-work/related-work.component';
import { SharedUiNoBorderCardModule } from '@taga-now/shared/ui/no-border-card';
import { SharedUiAvatarModule } from '@taga-now/shared/ui/avatar';
import { SharedUiModalLayoutModule } from '@taga-now/shared/ui/modal-layout';

@NgModule({
  imports: [CommonModule, SharedUiNoBorderCardModule,SharedUiAvatarModule, SharedUiModalLayoutModule],
  declarations: [RelatedWorkComponent],
  exports: [RelatedWorkComponent],
})
export class TagaNowCompanyUiRelatedWorkModule {}
