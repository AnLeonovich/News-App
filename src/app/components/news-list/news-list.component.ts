import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private limit: number = 4;
  constructor(public UserService: UserService) { }

  ngOnInit() {
  }

  showMore() {
    this.limit = this.UserService.mockNews.length
  }

}
