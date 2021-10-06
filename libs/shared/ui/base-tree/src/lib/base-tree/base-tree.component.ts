import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-base-tree',
  templateUrl: './base-tree.component.html',
  styleUrls: ['./base-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
