import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css',
})
export class ChangePassword {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  errorMessage = '';

  showPassword: boolean[] = [false, false, false];

togglePassword(index: number) {
  this.showPassword[index] = !this.showPassword[index];
}


  changePassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  ) {

    if (newPassword !== confirmNewPassword) {
    this.errorMessage = 'New password and confirm password do not match';
    return;
  }

  this.errorMessage = '';

    const data = {
      currentPassword,
      newPassword,
      confirmNewPassword
    };

    this.authService.changePassword(data)
      .subscribe({
        next: (response) => {
           console.log('Success', response);

          alert('Password Changed Successfully');

          // الانتقال إلى Dashboard
          this.router.navigate(['/dashboard']);

        },
         error: (err) => {

        // الخطأ القادم من Backend
        this.errorMessage = 'Current password is incorrect';

      }
      });

  }

}
