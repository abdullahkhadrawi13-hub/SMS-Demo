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
) {}

  changePassword(
 currentPassword:string,
 newPassword:string,
 confirmNewPassword:string
){

const data = {
 currentPassword,
 newPassword,
 confirmNewPassword
};


this.authService.changePassword(data)
.subscribe(response=>{

 alert(response);

 this.router.navigate(['/dashboard']);

});

}

}
