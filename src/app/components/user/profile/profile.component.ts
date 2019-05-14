import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import { UserInterface } from "../../../models/user";
import {User} from "firebase";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  user: UserInterface = {
    // id: ,
    portal: null,
    bloque: null,
    piso: null,
    letra: '',
    email: '',
  };

  providerId: string = 'null';

  ngOnInit() {
    this.authService.isAuth().subscribe( user => {
      if(user) {
        this.user = user;
        this.providerId = user.providerData[0].providerId;
        console.log('USER', this.providerId);
      }
    })
  }

}
