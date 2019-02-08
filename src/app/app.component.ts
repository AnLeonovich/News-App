import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  public isAuthorized = false;
  public selectedSource = 'CNN';
  constructor() {}

  onChanged(authorization:boolean){
    this.isAuthorized = authorization;
  }

  onSelect(selectedSource:string){
    this.selectedSource = selectedSource;
    console.log(this.selectedSource)
  }
}
