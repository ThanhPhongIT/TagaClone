/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserInterface, CiAuthStateService } from '@consult-indochina/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'tgn-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit {
  currentUser$!: Observable<UserInterface>;
  constructor(private ciAuthState: CiAuthStateService) {}

  ngOnInit() {
    this.currentUser$ = this.ciAuthState.currentUser$;
    this.currentUser$.subscribe((res)=> {
      console.log(res);
    })
  }
}
