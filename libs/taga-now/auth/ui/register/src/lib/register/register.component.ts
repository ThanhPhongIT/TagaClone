import { Router } from '@angular/router';
import { AuthService } from './../../../../../data-access/api/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tgn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  type = 'password';
  type_confirm = 'password';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Username: [null],
      Password: [null],
      PasswordConfirm: [null],
    });
  }

  register() {
    if (
      this.registerForm.get('Password')?.value ===
      this.registerForm.get('PasswordConfirm')?.value
    ) {
      this.authService.onSignup(this.registerForm);
    } else {
      alert(
        'Mật khẩu và Xác nhận mật khẩu không trùng khớp, vui lòng kiểm tra lại'
      );
    }
  }
}
