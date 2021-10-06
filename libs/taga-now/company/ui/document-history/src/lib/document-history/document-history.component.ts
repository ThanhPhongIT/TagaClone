import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tgn-document-history',
  templateUrl: './document-history.component.html',
  styleUrls: ['./document-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentHistoryComponent implements OnInit {
  @Input() listButton!: any;
  @Output() callBack = new EventEmitter();
  positionDropdown: NzPlacementType = 'bottomRight';
  constructor() { }

  ngOnInit() {
  }

}
