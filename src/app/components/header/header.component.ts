import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.UserService.login();
    console.log('login', this.UserService.isAuthorized())
  }

  logout() {
  	this.UserService.logout();
    console.log('logout', this.UserService.isAuthorized())
  }

}
