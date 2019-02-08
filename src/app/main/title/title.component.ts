import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() selectedSource: string;
  constructor() { }

  ngOnInit() {
    console.log(this.selectedSource)
  }

}
