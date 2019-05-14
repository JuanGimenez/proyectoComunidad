import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLogedComponent } from './components/home-loged/home-loged.component';
import {compileNgModuleFromRender2} from "@angular/compiler/src/render3/r3_module_compiler";

//services

import { ReservasComponent } from './components/reservas/reservas.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component'
import { LoginComponent } from "./components/user/login/login.component";
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment"
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    HomeLogedComponent,
    ReservasComponent,
    ComentariosComponent,
    UserComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
