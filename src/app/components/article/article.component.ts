import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Object;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }
}
