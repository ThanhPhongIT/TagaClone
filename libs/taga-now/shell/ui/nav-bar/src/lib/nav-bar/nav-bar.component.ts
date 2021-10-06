
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavBarItems } from '@taga-now/shared/data-access/models';
import { NavBarStore } from '@taga-now/shared/data-access/store';
import { Observable } from 'rxjs';
import { LogoutModalComponent } from 'libs/taga-now/shell/ui/logout-modal/src/lib/logout-modal/logout-modal.component';
import { AuthService } from 'libs/taga-now/auth/data-access/api/auth.service';
@Component({
  selector: 'tgn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  @Input() expanded;
  get sidebarWidth(): number {
    return this.expanded ? 64 : 0;
  }
  navBarItems$: Observable<NavBarItems[]>;
  userName = 'Profile';
  constructor(
    private navBarStore: NavBarStore, // public authQuery: AuthQuery, // @Inject(NzDrawerService) private drawerService: NzDrawerService, 
    private modalService: NzModalService,
    private authService: AuthService
  ) {
    this.navBarItems$ = this.navBarStore.navBarItems$;
  }

  openLogoutModal(){
    this.modalService.create({
      nzContent: LogoutModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 554,
      nzBodyStyle: {
        'border-radius': '24px'
      }
    });
  }
  openCreateIssueModal() {
    // this.modalService.create({
    //   nzContent: NavBarComponent,
    //   nzClosable: false,
    //   nzFooter: null,
    //   nzWidth: 700,
    // });
  }

  openSearchDrawler() {
    // this.drawerService.create({
    //   nzContent: UserDropdownComponent,
    //   nzTitle: null,
    //   nzPlacement: 'left',
    //   nzClosable: false,
    //   nzWidth: 500,
    // });
  }
}

// class NavItem {
//   constructor(
//     public icon: string,
//     public tooltip: string,
//     public handler: Handler
//   ) {}
// }

// type Handler = () => void;
