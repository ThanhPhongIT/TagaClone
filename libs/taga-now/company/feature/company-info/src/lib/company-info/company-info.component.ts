import { EditCompanyModalComponent } from './../../../../../ui/edit-company-modal/src/lib/edit-company-modal/edit-company-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent implements OnInit {
  constructor(private modalService: NzModalService) {}

  ngOnInit() {}

  openEditModal() {
    this.modalService.create({
      nzContent: EditCompanyModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 766,
      nzBodyStyle: {
        'border-radius': '24px',
      },
    });
  }
}
