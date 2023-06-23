import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';

@Injectable()
export class SeguridadRouter implements CanActivate {
  constructor(
    private seguridadService: SeguridadService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
    if (this.seguridadService.onSesion()) {
      console.log('seguridad true respuesta');
      return true;
    } else {
      console.log('seguridad false respuesta');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
