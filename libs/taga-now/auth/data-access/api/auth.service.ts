import { environment } from './../../../../../apps/taga-now/src/environments/environment';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Injectable, OnInit } from '@angular/core';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
interface formDataInterface {
  name: string;
  picture: string;
  gender: string;
  phone_number: string;
  [key: string]: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  poolData = {
    UserPoolId: environment.cognitoUserPoolId, // Your user pool id here
    ClientId: environment.cognitoAppClientId, // Your client id here
  };
  userPool = new CognitoUserPool(this.poolData);
  constructor(private router: Router) {}

  onSignIn(form: FormGroup) {
    let res;
    if (form.valid) {
      let authenticationDetails = new AuthenticationDetails({
        Username: form.get('Username')?.value,
        Password: form.get('Password')?.value,
      });
      let userData = {
        Username: form.get('Username')?.value,
        Pool: this.userPool,
      };

      //TODO: cleaning tokenData
      localStorage.removeItem('tokenData');
      //END TODO
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result: any) => {
          console.log(result);
          //TODO: set tokenData for later invoking API
          localStorage.setItem('tokenData', JSON.stringify(result));
          //END TODO
          this.router.navigate(['/']);
        },
        onFailure: (err: any) => {
          res = err;
          // alert(err.message || JSON.stringify(err));
        },
      });
    } else {
      console.log('invalid');
    }
    return res;
  }

  onSignup(form: FormGroup) {
    if (form.valid) {
      var attributeList = [];
      let formData: formDataInterface = {
        name: '',
        picture: '',
        gender: '',
        phone_number: '',
      };
      for (let key in formData) {
        let attrData = {
          Name: key,
          Value: formData[key],
        };
        let attribute = new CognitoUserAttribute(attrData);
        attributeList.push(attribute);
      }
      this.userPool.signUp(
        form.get('Username')?.value,
        form.get('Password')?.value,
        attributeList,
        [],
        (err, result) => {
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          } else {
            alert('Đăng ký thành công vui lòng kiểm tra email để xác nhận');
            this.router.navigate(['/log-in']);
          }
        }
      );
    } else {
      alert('Invalid');
    }
  }

  isLoggedIn(): boolean {
    var isAuth = false;
    var cognitoUser = this.userPool.getCurrentUser();
    if (cognitoUser != null) {
      cognitoUser.getSession((err: any, session: any) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
        }
        isAuth = session.isValid();
      });
    }
    return isAuth;
  }

  onForgot(userName: string) {
    if (userName) {
      var userData = {
        Username: userName,
        Pool: this.userPool,
      };
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.forgotPassword({
        onSuccess: function (data) {
          console.log(data);
        },
        onFailure: function (err) {
          alert(err.message || JSON.stringify(err));
        },
      });
    }
  }

  confirmPassword(
    username: string,
    verificationCode: string,
    newPassword: string
  ) {
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool,
    });

    return new Promise<void>((resolve, reject) => {
      cognitoUser.confirmPassword(verificationCode, newPassword, {
        onFailure(err) {
          reject(err);
        },
        onSuccess() {
          resolve();
        },
      });
    });
  }

  onLogout(): void {
    let cognitoUser = this.userPool.getCurrentUser();
    cognitoUser?.signOut();
    localStorage.removeItem('tokenData');
    this.router.navigate(['log-in']);
  }
}
