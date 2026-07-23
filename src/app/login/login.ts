import { Component, signal } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  errorMessage = signal('');

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }


  login(loginId: string, password: string) {

    this.errorMessage.set('');

    const data = {
      loginId: loginId,
      password: password
    };


    this.authService.login(data).subscribe(

      (response) => {

        localStorage.setItem(
          'token',
          response.token
        );


        if (response.mustChangePassword) {

          this.router.navigate(['/change-password']);

        } else {

          this.router.navigate(['/dashboard']);

        }

      },


      (err) => {

        this.errorMessage.set(
          'Invalid username or password'
        );

      }

    );

  }

}