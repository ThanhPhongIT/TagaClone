import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewContainerRef,
  ChangeDetectorRef,
  InjectionToken,
} from '@angular/core';
import { ContextMenuComponent } from 'libs/taga-now/friends/ui/context-menu/src/lib/context-menu/context-menu.component';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');
@Component({
  selector: 'tgn-gr-card',
  templateUrl: './gr-card.component.html',
  styleUrls: ['./gr-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrCardComponent implements OnInit {
  @Input() isFriend!: boolean;
  @Input() data: any;
  @Input() haveGroup: boolean = false;
  radioValue!: any;
  isOpen: boolean = false;
  backgroundSubject = new Subject();
  backgroundActive: boolean = false;
  //   createInjector(dataToPass): PortalInjector {
  //     const injectorTokens = new WeakMap();
  //     injectorTokens.set(CONTAINER_DATA, dataToPass);
  //     return new PortalInjector(this._injector, injectorTokens);
  // }
  openContextMenu(ev: any) {
    this.backgroundSubject.next(true);
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay
      .position()
      .global()
      .left(`${ev.clientX - 175}px`)
      .top(`${ev.clientY + 15}px`);

    config.hasBackdrop = true;
    config.backdropClass = 'cdk-overlay-transparent-backdrop';
    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      this.backgroundSubject.next(false);
      overlayRef.dispose();
    });

    overlayRef.attach(
      new ComponentPortal(ContextMenuComponent, this.viewContainerRef)
    );
    return false;
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    public overlay: Overlay,
    public cd: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.backgroundSubject.asObservable().subscribe((res: any) => {
      this.backgroundActive = res;
      console.log(res);
    });
  }
}
