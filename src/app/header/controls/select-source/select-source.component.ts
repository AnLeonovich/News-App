import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-source',
  templateUrl: './select-source.component.html',
  styleUrls: ['./select-source.component.css']
})
export class SelectSourceComponent implements OnInit {
  @Output() onSelect = new EventEmitter<boolean>();
  private sourceList: Array<string> = ['CNN', 'Google News', 'The Washington Times', 'The New York Times', 'National Geographic',
  'Fox News', 'Usa Today', 'The Wall Street Journal', 'MTV News', 'Local News', 'All sources'];
  public selectedSource = 'CNN';

  constructor() { }

  ngOnInit() {
  }

  onChange(selectedSource) {
    this.selectedSource = selectedSource;
    this.onSelect.emit(selectedSource);
  }

}
