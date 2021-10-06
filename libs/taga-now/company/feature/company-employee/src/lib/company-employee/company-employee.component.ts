import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddEmployeeModalComponent } from 'libs/taga-now/company/ui/add-employee-modal/src/lib/add-employee-modal/add-employee-modal.component';
import { AddGroupEmployeeModalComponent } from 'libs/taga-now/company/ui/add-employee-modal/src/lib/add-group-employee-modal/add-group-employee-modal.component';
@Component({
  selector: 'tgn-company-employee',
  templateUrl: './company-employee.component.html',
  styleUrls: ['./company-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyEmployeeComponent implements OnInit {
  listFriend1 = [
    {
      isFriend: true,
      data: {
        name: 'Phạm Văn Phong',
        position: 'Fronend Developer',
        project: 'TagaNow',
      },
    },
    { isFriend: false },
  ];
  listFriend2 = [{ isFriend: false }, { isFriend: false }, { isFriend: true }];
  listButton = [
    {
      label: 'Tạo nhóm',
      svgKey: 'deleteGr',
      name: 'createGr',
    },
    {
      label: 'Thêm nhân sự',
      svgKey: 'addEmployee',
      name: 'addEmployee',
    },
  ];
  constructor(private modalService: NzModalService) {}
  showModal(event: string) {
    if (event === 'addEmployee') {
      const modal = this.modalService.create({
        nzContent: AddEmployeeModalComponent,
        nzFooter: null,
        nzCloseIcon: 'close-circle',
        nzClassName: 'my-modal',
      });
    } else if (event === 'createGr') {
      const modal = this.modalService.create({
        nzContent: AddGroupEmployeeModalComponent,
        nzFooter: null,
        nzCloseIcon: 'close-circle',
        nzClassName: 'my-modal',
      });
    }
  }
  ngOnInit() {}
}
