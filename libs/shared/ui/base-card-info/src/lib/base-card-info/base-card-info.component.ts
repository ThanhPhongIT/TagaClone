import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'tgn-base-card-info',
  templateUrl: './base-card-info.component.html',
  styleUrls: ['./base-card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseCardInfoComponent implements OnInit {
  @Input() keyIcon = '';
  @Input() position = '';
  @Input() place = '';
  @Input() time = '';
  constructor() {}

  ngOnInit() {}
}
