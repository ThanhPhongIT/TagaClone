import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
