import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  private article: Object;
  constructor(private route: ActivatedRoute, public userService: UserService) {
    this.article = this.userService.getArticle(this.route.snapshot.params['id'])
  }

  ngOnInit() {
    this.article = this.userService.getArticle(this.route.snapshot.params['id'])
  }

}
