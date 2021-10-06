import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from './../../../../../../../../apps/taga-now/src/environments/environment.prod';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'tgn-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileMainComponent implements OnInit {
  currentUser$!: Observable<any>;
  userData: any = '';
  constructor() {}

  ngOnInit() {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };
    let userPool = new CognitoUserPool(poolData);
    let cognitoUser = userPool.getCurrentUser();

    this.userData = JSON.stringify(cognitoUser);
    console.log(this.userData);
  }
}
