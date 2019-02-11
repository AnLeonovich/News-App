import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  private article;
  constructor(private route: ActivatedRoute, public UserService: UserService) {
    this.article = this.UserService.getArticle(this.route.snapshot.params['id'])
    console.log(this.article)
  }

  ngOnInit() {
    this.article = this.UserService.getArticle(this.route.snapshot.params['id'])
  }

}
