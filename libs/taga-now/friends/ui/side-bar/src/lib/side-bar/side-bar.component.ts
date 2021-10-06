import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'tgn-fr-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  activeId: number = 1;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  img = [
    {
      id: 1,
      src: 'https://i.pinimg.com/originals/17/bb/7f/17bb7f9c451ed70c34f76f449a0a8fee.jpg',
      name: 'T',
      style: 'color:#f56a00; background-color:#fde3cf;',
      fullname: 'Trung'
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/originals/17/bb/7f/17bb7f9c451ed70c34f76f449a0a8fee.jpg',
      name: 'Quang',
      fullname: 'Nguyen Quang Anh',

    },
    {
      id: 3,
      src: 'https://i.pinimg.com/originals/17/bb/7f/17bb7f9c451ed70c34f76f449a0a8fee.jpg',
      name: 'P',
      fullname: 'Nguyen Quang Phanh',
    },
    {
      id: 4,
      src: 'https://i.pinimg.com/originals/17/bb/7f/17bb7f9c451ed70c34f76f449a0a8fee.jpg',
      name: '',
      icon: 'user',
      fullname: 'Nguyen Quang Anh',
    },
  ]
  ngOnInit() {
    if (this.router.url.split('/')[2] == 'detail') {
      this.activeId = 1;
    } else if (this.router.url.split('/')[2] == 'groups') {
      this.activeId = 2;
    }
  }
}
