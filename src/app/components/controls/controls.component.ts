import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  public selectedSource;
  private sourceList;
  public nrSelect;
  constructor(public userService: UserService, private newsService: NewsService) {
    this.newsService.updatedSource.subscribe((data: any) => {
      this.nrSelect = data;
    })
  }

  ngOnInit() {
    this.newsService.getSources().subscribe((data: any) => {
      this.sourceList = data;
      this.selectedSource = this.sourceList[0];
      this.newsService.selectSource(this.sourceList[0])
    });
  }

  onChange(selectedSource) {
    this.newsService.selectSource(this.sourceList.filter(source => source.id === selectedSource)[0]);
  }

  changeFilter(keyWord) {
    this.newsService.setFilter(keyWord);
  }

  checkboxChange(checked) {
    if (checked) {
      this.newsService.selectSource(this.sourceList.filter(source => source.id === 'local')[0]);
    } else {
      this.newsService.selectSource(this.sourceList[0]);
    }
  }

}
