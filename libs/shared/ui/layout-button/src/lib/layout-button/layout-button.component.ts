import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'tgn-layout-button',
  templateUrl: './layout-button.component.html',
  styleUrls: ['./layout-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutButtonComponent implements OnInit {
  @Input() listButton!: any;
  @Output() callBack = new EventEmitter();
  @ContentChild('layoutButtonContent')
  layoutButtonContent!: TemplateRef<unknown>;
  positionDropdown: NzPlacementType = 'bottomRight';
  constructor() {}

  ngOnInit() {}
}
