import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-add-group-employee-modal',
  templateUrl: './add-group-employee-modal.component.html',
  styleUrls: ['./add-group-employee-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGroupEmployeeModalComponent implements OnInit {

  constructor() { }
  listInput = [
    {title: 'Tên nhóm: ', placeholder: 'Hành chính nhân sự: ', value: ''},
    {title: 'Trưởng nhóm: ', placeholder: 'Chọn trưởng nhóm ... ', value: ''},
  ]
  ngOnInit() {
  }

}
