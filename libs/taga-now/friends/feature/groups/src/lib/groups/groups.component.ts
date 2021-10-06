import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent implements OnInit {
  listFriend1 = [{ isFriend: true }, { isFriend: false }];
  listFriend2 = [{ isFriend: false }, { isFriend: false }, { isFriend: true }, { isFriend: true }];
  constructor() {}

  ngOnInit(): void {}
}
