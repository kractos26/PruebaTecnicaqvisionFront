import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio.component';

import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import {SeguridadRouter} from './seguridad/seguridad.router';
import {LibroComponent} from './Libro/libro.component';


const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [SeguridadRouter] },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'libros', component: LibroComponent, canActivate: [SeguridadRouter] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadRouter]
})
export class AppRoutingModule {}
