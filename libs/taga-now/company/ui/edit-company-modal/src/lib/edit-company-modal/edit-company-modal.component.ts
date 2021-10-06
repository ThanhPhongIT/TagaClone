import { NzModalService } from 'ng-zorro-antd/modal';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-edit-company-modal',
  templateUrl: './edit-company-modal.component.html',
  styleUrls: ['./edit-company-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCompanyModalComponent implements OnInit {
  constructor(private modalService: NzModalService) {}

  ngOnInit() {}
  close() {
    this.modalService.closeAll();
  }
  confirm() {
    this.close();
    // this.authService.onLogout();
  }
}
