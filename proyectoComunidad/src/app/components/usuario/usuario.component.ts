import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  users: any[] = [];

  constructor( private homeService: HomeService) {
    this.homeService.getUser().subscribe( (data: any) => {

      console.log(data);
      this.users = data;
    })

  }

  ngOnInit() {
  }

}
