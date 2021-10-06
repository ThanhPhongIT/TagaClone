import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef,
  ContentChild,
  Input,
} from '@angular/core';

@Component({
  selector: 'tgn-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalLayoutComponent implements OnInit {
  @Input() svgIcon!: any;
  @Input() title!: string;
  @Input() buttonName!: string;
  @ContentChild('modalContent') modalContent!: TemplateRef<unknown>;
  constructor() {}

  ngOnInit() {}
}
