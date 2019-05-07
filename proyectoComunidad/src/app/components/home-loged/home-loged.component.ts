import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrls: ['./home-loged.component.css']
})
export class HomeLogedComponent implements OnInit {

  profile: any;
  profile2: any;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      // this.profile = this.auth.userProfile;
      this.profile = this.auth.userProfile;
      this.profile2 = this.auth;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
    console.log(this.profile);
    console.log(this.profile2)
      });
    }
  }

}
