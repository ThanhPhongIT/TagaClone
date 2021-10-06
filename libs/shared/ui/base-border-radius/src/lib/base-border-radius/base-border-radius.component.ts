import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef,
  ContentChild,
  Input,
} from '@angular/core';

@Component({
  selector: 'tgn-base-border-radius',
  templateUrl: './base-border-radius.component.html',
  styleUrls: ['./base-border-radius.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseBorderRadiusComponent implements OnInit {
  @ContentChild('content') content!: TemplateRef<unknown>;
  @Input() borderColor = 'rgba(140, 140, 140, 0.5)';
  constructor() {}

  ngOnInit() {}
}
