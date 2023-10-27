import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  userType: User | undefined;
  constructor(private authService: AuthService) {
    this.userType = this.authService.getCurrentUserInfo(); // Kullanıcı türünü alın
    if (this.userType) {
      const userName = this.userType.fullName;
      const email = this.userType.email;
    }
  }
}
