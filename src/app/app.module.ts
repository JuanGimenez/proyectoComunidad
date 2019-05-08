import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLogedComponent } from './components/home-loged/home-loged.component';
import {compileNgModuleFromRender2} from "@angular/compiler/src/render3/r3_module_compiler";

//services

import { AuthService } from "./services/auth.service";
import { ReservasComponent } from './components/reservas/reservas.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component'
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    HomeLogedComponent,
    ReservasComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }