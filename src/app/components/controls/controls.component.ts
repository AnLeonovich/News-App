import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { NewsService } from '../../services/news.service'
import { Sources } from '../../models/sources'

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  private selectedSource;
  public sourceList;
  public nrSelect;
  public checked = false;
  constructor(public userService: UserService, private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.updatedSource.subscribe((data: any) => {
      this.nrSelect = data;
    })

    this.selectedSource = this.newsService.getSource();

    if (!this.selectedSource) {
      this.newsService.getSources().subscribe((data: Sources) => {
        this.sourceList = data;
        this.selectedSource = this.sourceList[0];
        this.newsService.selectSource(this.sourceList[0])
      });
    } else {
      this.sourceList = this.newsService.getSources();
      this.newsService.selectSource(this.selectedSource);
    }
  }

  onChange(selectedSource) {
    this.checked = false;
    this.newsService.selectSource(this.sourceList.find(source => source.id === selectedSource));
  }

  changeFilter(keyWord) {
    this.newsService.setFilter(keyWord);
  }

  checkboxChange(checked) {
    this.checked = true;
    if (checked) {
      this.newsService.selectSource(this.sourceList.find(source => source.id === 'local'));
    } else {
      this.newsService.selectSource(this.sourceList[0]);
    }
  }

}
