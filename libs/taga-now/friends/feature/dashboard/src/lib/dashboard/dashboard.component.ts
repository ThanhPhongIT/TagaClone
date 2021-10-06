import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortalDirective } from '@angular/cdk/portal';

import {
  NzContextMenuService,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'tgn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  globalOverlayPosition = 0;

  @ViewChild('overlayGlobalTemplate')
  templateGlobalPortals!: TemplateRef<any>;

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
  ) {}

  /**
   * Display the contents of ng-template
   */
  openRotiniPanel(ev) {
    let config = new OverlayConfig();

    config.positionStrategy = this.overlay
      .position()
      .global()
      .left(`${ev.clientX}px`)
      .top(`${ev.clientY}px`);

    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    overlayRef.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
    return false;
  }
}
@Component({
  selector: 'rotini-panel',
  template: '<p class="demo-rotini">Rotin</p>',
})
export class RotiniPanel {}
