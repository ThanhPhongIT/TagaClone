import {
  ChangeDetectionStrategy, Component, Input
} from '@angular/core';
import { UserInterface } from '@consult-indochina/auth';
@Component({
  selector: 'tgn-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPersonalComponent {
  @Input() userDetail!: UserInterface;
}
