import { Router } from '@angular/router';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'apps/taga-now/src/environments/environment';
import { AuthService } from './../../../../../data-access/api/auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  userName: string = '';
  code = '';
  password = '';
  confirmPassword = '';
  isVrified = false;
  isPass = false;
  isEmail = true;
  type = 'password';
  type_confirm = 'password';
  nameHide = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  enterVerified() {
    if (this.validateEmail(this.userName)) {
      let index = this.userName.indexOf('@');
      let length = this.userName.length;
      this.nameHide =
        this.userName.slice(0, 2) +
        '.....' +
        this.userName.slice(index - 2, length);
      // console.log(this.authService.onForgot(this.userName));
      this.authService.onForgot(this.userName);
      this.isVrified = true;
      this.isEmail = false;
      this.isPass = false;
    } else {
      alert('Vui lòng nhập email hợp lệ');
    }
  }

  enterPass() {
    if (this.code.length === 6) {
      this.isPass = true;
      this.isVrified = false;
      this.isEmail = false;
    } else {
      alert('Nhập mã xác nhận gồm 6 số!');
    }
  }

  confirm() {
    if (this.password === this.confirmPassword) {
      this.authService
        .confirmPassword(this.userName, this.code, this.password)
        .then(() => {
          alert('Đổi mật khẩu thành công!');
          this.router.navigate(['/log-in']);
        });
    } else {
      alert(
        'Mật khẩu và Xác nhận mật khẩu không trùng khớp, vui lòng kiểm tra lại'
      );
    }
  }

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
