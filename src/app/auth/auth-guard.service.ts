import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
  }

  canLoad(route: Route) {
    if (this.authService.isAuthenticated()) {
      console.log('Worked');
      return true;
    } else {
      console.log('did not work');
      this.router.navigate(['/signin']);
    }
  }
}
