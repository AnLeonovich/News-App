import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authorized: boolean = false;

  constructor(private router: Router) { }

  public login() {
    this.authorized = true;
  }

  public logout() {
    this.authorized = false;
    if (this.router.url === '/create' || this.router.url === '/edit') {
      this.router.navigate(['/']);
    }
  }

  public isAuthorized() {
    return this.authorized;
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.authorized);
      }
    );
    return promise
  }
}
