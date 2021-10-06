import { AuthService } from './../../../../../../auth/data-access/api/auth.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutModalComponent implements OnInit {
  isVisible = true;
  constructor(
    private modalService: NzModalService,
    private authService: AuthService
    ) { }
  ngOnInit() {
  }
  close(){
    this.modalService.closeAll();
  }
  logout(){
    this.close();
    this.authService.onLogout();
  }

}
