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
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
  return this.userService.isAuthenticated()
  .then(
    (authenticated: boolean) => {
      if(authenticated) {
        return true;
      } else {
        console.log('NEED TO LOGIN!')
        this.router.navigate(['/']);
        return false
      }
    }
  )}
}
