import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() isAuthorized: boolean;
  @Output() onSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedSource: string) {
  	this.onSelected.emit(selectedSource)
  }

}
