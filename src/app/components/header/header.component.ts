import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login();
    console.log('login', this.userService.isAuthorized())
  }

  logout() {
  	this.userService.logout();
    console.log('logout', this.userService.isAuthorized())
  }

}
