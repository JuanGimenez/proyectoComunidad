import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../interfaces/home.interfaces";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homeURL:string ="https://proyectocomunidad-4ea87.firebaseio.com/user.json";
  usuarioURL:string ="https://proyectocomunidad-4ea87.firebaseio.com/user/";

  constructor( private http: HttpClient) { }

  nuevoUser( user:User ){

    let body = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.homeURL, body, { headers } )
      .pipe(map(res => {
        console.log(res);
        return res;
      }))


  }

  actualizarUser( user:User, key$:string ){

    let body =JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${ this.usuarioURL }/${ key$ }.json `;

    return this.http.put( url , body, { headers } )
      .pipe(map(res => {
        console.log(res);
        return res;
      }))


  }

}
