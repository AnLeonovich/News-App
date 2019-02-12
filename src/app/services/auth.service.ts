import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router 
} from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { };
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuthenticated = this.userService.isAuthorized();
    console.log('TEST', isAuthenticated)
    if (isAuthenticated ) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false
    }
  }
}
