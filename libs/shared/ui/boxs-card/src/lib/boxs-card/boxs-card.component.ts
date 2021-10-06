/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'tgn-boxs-card',
  templateUrl: './boxs-card.component.html',
  styleUrls: ['./boxs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxsCardComponent implements OnInit {
  @ContentChild('friendsCard') friendsCard!: TemplateRef<unknown>;
  constructor() {}

  ngOnInit(): void {}
}
