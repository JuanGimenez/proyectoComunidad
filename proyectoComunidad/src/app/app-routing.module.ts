import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {ReservasComponent} from "./components/reservas/reservas.component";
import {ComentariosComponent} from "./components/comentarios/comentarios.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {HomeLogedComponent} from "./components/home-loged/home-loged.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:name', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'homeLoged', component: HomeLogedComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'comentarios', component: ComentariosComponent},
  { path: 'usuario', component: UsuarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
