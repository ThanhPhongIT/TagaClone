import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatePersonalComponent } from './certificate-personal/certificate-personal.component';
import { SharedUiBaseCardInfoModule } from '@taga-now/shared/ui/base-card-info';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SharedUiBaseCardInfoModule, SvgIconsModule],
  declarations: [CertificatePersonalComponent],
  exports: [CertificatePersonalComponent],
})
export class TagaNowUserUiCertificatePersonalModule {}
