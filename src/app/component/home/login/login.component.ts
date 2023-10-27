import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginRequest } from 'src/app/core/models/request/login-request.model';
import { RegisterRequest } from 'src/app/core/models/request/register-request.model';
import { ResponseStatus } from 'src/app/core/models/response/base-response.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LoginComponent {

  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{};

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService
  ) {}

  async login() {
    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      const userType = this.authService.getUserType();
      if (userType === 0) {
        await this.router.navigate(['/panel/admin/dashboard']);
      } else if (userType === 1) {
        await this.router.navigate(['/panel/customer/dashboard']);
      } else if (userType === 2) {
        await this.router.navigate(['/panel/personnel/dashboard']);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Hata',
          detail: 'Kullanıcı türü belirlenemedi!',
        });
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Hata',
        detail: 'Kullanıcı adı veya şifre hatalı!',
      });
      this.loginRequest.password = '';
    }
  }

}
