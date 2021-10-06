import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'tgn-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupItemComponent implements OnInit {
  @Input() grName: string = '';
  @Input() listItem: any;
  @Input() haveGroup: boolean = false;
  constructor() {}

  ngOnInit() {}
}
