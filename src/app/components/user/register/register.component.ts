import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  pass: string = '';
  portal: number;



  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.pass).then((res) => {
      this.onLoginRedirect()
    }).catch(err => console.log(err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser().then((res) => {
      console.log(res);
      this.onLoginRedirect()
    }).catch( err => console.log('err ', err));
  }

  onLoginRedirect(): void {
    this.router.navigate(['/home']);
  }


}
