import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
