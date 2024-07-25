import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: LoginService,
    private router: Router) { };
  canActivate() {
    let isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      return isLoggedIn;
    } else {
      this.router.navigate(['login']);
      return isLoggedIn;
    }
  }

}