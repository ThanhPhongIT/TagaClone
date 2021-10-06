import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../../../../data-access/api/auth.service';

@Component({
  selector: 'tgn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  uiOption!: string;
  loginForm!: FormGroup;
  type = 'password';
  isLoading: boolean = false;
  err: any;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: [null],
      Password: [null],
    });
  }

  login() {
    this.err = this.authService.onSignIn(this.loginForm);
  }

  // logout() {
  //   this.authService.logout().subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // signup(data: RegisterUser) {
  //   this.securityService.register(data).subscribe((res) => {
  //     console.log(res);
  //   });
  // return this.securityService.register(data);
  // }
}
