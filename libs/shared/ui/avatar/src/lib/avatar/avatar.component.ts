import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tgn-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit{
  @Input() avatarSrc = '';
  @Input() avtText = '';
  @Input() avtSize = 36;
  @Input() icon = 'user';
  @Input() style = 'background-color:#679bd8;';
  ngOnInit(): void {
    if (!this.style) {
      this.style = 'background-color:#679bd8;'
    }

  }
}
