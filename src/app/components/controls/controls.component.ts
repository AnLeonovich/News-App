import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  private sourceList: Array<string> = ['CNN', 'Google News', 'The Washington Times', 'The New York Times', 'National Geographic',
  'Fox News', 'Usa Today', 'The Wall Street Journal', 'MTV News', 'Local News', 'All sources'];
  public selectedSource = 'CNN';
  
  constructor(public UserService: UserService) {
  	console.log(this.UserService.isAuthorized())
  }

  ngOnInit() {
  }

  onChange(selectedSource) {
    this.UserService.selectSource(selectedSource)
  }

}
