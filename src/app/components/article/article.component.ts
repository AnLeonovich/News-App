import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article;
  @Input() show: Object;
  @Output() Delete = new EventEmitter<string>();

  constructor(public userService: UserService, public newsService: NewsService) { }

  ngOnInit() {}

  onDelete(data) {
    this.newsService.deleteArticle(this.article._id, false)
    this.Delete.emit(this.article._id);
  }

  errorHandler(event) {
    event.target.src = 'https://cdn.cnn.com/cnnnext/dam/assets/190207113233-border-wall-us-mexico-super-tease.jpg';
  }
}
