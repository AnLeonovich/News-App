import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  login() {
    console.log('logging in');
    this.onClick.emit(true);
  }
  logout() {
    console.log('logging out');
    this.onClick.emit(false);
  }

}
