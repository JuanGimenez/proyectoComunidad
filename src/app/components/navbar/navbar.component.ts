import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreComunidad: String = 'Las Yucas';
  isLogged = false;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth ) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
  this.authService.isAuth().subscribe( auth => {
    if(auth){
      console.log('User logged');
      this.isLogged = true;
    } else {
      console.log('NO logged');
      this.isLogged = false;
    }
  })
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
