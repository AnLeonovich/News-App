import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
  }

}
