import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  pass: string = '';

  constructor( private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoginEmail(): void {
    this.authService.loginEmailUser(this.email, this.pass)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log(err.message));

  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser().then((res) => {
      console.log(res);
      this.onLoginRedirect();
    }).catch( err => console.log('err ', err));
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(['/home']);

  }



}
