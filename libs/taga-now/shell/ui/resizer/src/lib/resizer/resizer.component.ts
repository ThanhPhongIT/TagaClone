import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tgn-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizerComponent {
  @Input() expanded!: boolean;
  @Input() expandedLv2!: boolean;

  get icon() {
    return this.expandedLv2 ? 'leftCircle' : 'rightCircle';
  }
  // constructor() {}
}
