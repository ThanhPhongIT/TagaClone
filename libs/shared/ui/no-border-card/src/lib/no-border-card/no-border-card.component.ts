/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'tgn-no-border-card',
  templateUrl: './no-border-card.component.html',
  styleUrls: ['./no-border-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoBorderCardComponent implements OnInit {
  @ContentChild('cardContent') cardContent!: TemplateRef<unknown>;

  ngOnInit(): void {}
}
