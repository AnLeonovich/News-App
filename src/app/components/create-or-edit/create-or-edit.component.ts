import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-create-or-edit',
  templateUrl: './create-or-edit.component.html',
  styleUrls: ['./create-or-edit.component.css']
})
export class CreateOrEditComponent implements OnInit {
  public title: string;
  constructor(private route: ActivatedRoute, public userService: UserService) {
    this.title = this.route.snapshot.routeConfig.path;
  }

  ngOnInit() {
    console.log('TEST EDIT', this.userService.isAuthorized())
  }

  onSubmit(myForm) {
    console.log('SAVE', myForm.value)
  }

}