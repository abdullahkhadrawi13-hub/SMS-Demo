import { Component, signal } from '@angular/core';
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
  ) {}

  errorMessage = signal('');
  showPassword: boolean[] = [false, false, false];

  showSuccessDialog = signal(true);

  togglePassword(index: number) {
    this.showPassword[index] = !this.showPassword[index];
  }

  changePassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  ) {
    if (newPassword !== confirmNewPassword) {
      this.errorMessage.set(
        'New password and confirm password do not match'
      );
      return;
    }

    this.errorMessage.set('');

    const data = {
      currentPassword,
      newPassword,
      confirmNewPassword
    };

    this.authService.changePassword(data).subscribe(
      () => {
        this.showSuccessDialog.set(true);
      },
      (err) => {
        this.errorMessage.set('current password is incorrect');
      }
    );
  }

  onDialogOk() {
    this.showSuccessDialog.set(false);
    this.router.navigate(['/dashboard']);
  }
}