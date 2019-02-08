import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isAuthorized: boolean;
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.isAuthorized)
  }

  onClick(authorization:boolean){
    this.onChanged.emit(authorization)
  }

  onSelected(selectedSource:string) {
    this.onSelect.emit(selectedSource)
  }
}
