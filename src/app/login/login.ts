import { Component } from '@angular/core';
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
  ) { }


 login(loginId: string, password: string) {

  const data = {
    loginId: loginId,
    password: password
  };


  this.authService.login(data)
    .subscribe(response => {
      
      localStorage.setItem(
        'token',
        response.token
      );


      if(response.mustChangePassword){

        this.router.navigate(['/change-password']);

      }
      else{

        this.router.navigate(['/dashboard']);

      }

    });

}
}
