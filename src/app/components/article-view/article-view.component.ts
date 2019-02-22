import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  public article;
  public local: boolean;
  constructor(private route: ActivatedRoute, public userService: UserService, public newsService: NewsService) {}

  ngOnInit() {
    this.article = this.newsService.getArticle(this.route.snapshot.params['id']);

    this.local = this.newsService.getSource().id === 'local';
  }

  onDelete(data) {
    this.newsService.deleteArticle(this.article._id, true)
  }

  errorHandler(event) {
    event.target.src = 'https://cdn.cnn.com/cnnnext/dam/assets/190207113233-border-wall-us-mexico-super-tease.jpg';
  }
}
