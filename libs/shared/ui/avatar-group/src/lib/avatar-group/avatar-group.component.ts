import {
  ChangeDetectionStrategy, Component,


  Input
} from '@angular/core';

@Component({
  selector: 'tgn-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupComponent {
  @Input() userList: any;
}
