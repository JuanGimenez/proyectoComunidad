import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import { User} from "../../interfaces/home.interfaces";
import {HomeService} from "../../services/home.service";
import {Router, ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User = {
    nombre:"",
    apellidos:"",
    bloque:0,
    portal:0,
    piso:0,
    letra:""
  }

  nuevo:boolean = false;
  name:string;

  constructor( private homeService: HomeService,
               private router: Router,
               private route: ActivatedRoute
             ) {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.name = parametros['name'];
    })
  }

  ngOnInit() {
  }

  guardar() {

     if(this.name == null){
      console.log(this.user);
      this.homeService.nuevoUser(this.user)
        .subscribe( data => {
          this.router.navigate(['/user', data['name']]);
          },
          error=> console.log(error));
    }else{
      this.homeService.actualizarUser(this.user, this.name)
        .subscribe( data => {
            console.log(data);
          },
          error=> console.log(error));

    }

  }

  actualizar() {}

}
