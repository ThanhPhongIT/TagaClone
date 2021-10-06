import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'tgn-pick-employee',
  templateUrl: './pick-employee.component.html',
  styleUrls: ['./pick-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickEmployeeComponent implements OnInit {
  @Input() listEmployee!: any;
  @Output() callBack = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  deleteIndex(i: any) {
    this.listEmployee.splice(i, 1);
    this.callBack.emit(this.listEmployee);
  }
}
