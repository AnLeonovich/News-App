import { Component, OnInit, Input } from '@angular/core';
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
  constructor(public userService: UserService, public newsService: NewsService) { }

  ngOnInit() {
  }

  onDelete(data) {
    this.newsService.deleteArticle(this.article._id)
  }
}
