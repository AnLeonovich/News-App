import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private limit: number = 4;
  private learnMore: boolean = true;
  private hideExtra: boolean = false;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  showMore() {
    this.limit = this.userService.mockNews.length;
    this.learnMore = false;
    this.hideExtra = true;
  }

  hide() {
    this.limit = 4;
    this.learnMore = true;
    this.hideExtra = false;
  }

}
