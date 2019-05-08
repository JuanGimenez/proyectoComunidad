import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

import {ReservasComponent} from "./components/reservas/reservas.component";
import {ComentariosComponent} from "./components/comentarios/comentarios.component";
import {HomeLogedComponent} from "./components/home-loged/home-loged.component";
import {LoginComponent} from "./components/user/login/login.component";
import {UserComponent} from "./components/user/user.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/profile', component: ProfileComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'homeLoged' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
