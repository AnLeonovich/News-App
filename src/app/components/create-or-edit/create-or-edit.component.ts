import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-create-or-edit',
  templateUrl: './create-or-edit.component.html',
  styleUrls: ['./create-or-edit.component.css']
})
export class CreateOrEditComponent implements OnInit {
  public title: string;
  private article;
  public CreateForm: FormGroup;

  constructor(private route: ActivatedRoute, public userService: UserService, public newsService: NewsService, private formBuilder: FormBuilder) {
    this.CreateForm = formBuilder.group({
      "title": ["", [Validators.required]],
      "description": ["", [Validators.required]],
      "content": ["", [Validators.required]],
      "urlToImage": ["", [Validators.required]],
      "publishedAt": [""],
      "author": [""],
      "url": [""],
      "imageType": [""]
    })
  } 

  ngOnInit() {
    if (this.route.snapshot.routeConfig.path === 'create') {
      this.title = this.route.snapshot.routeConfig.path;
    } else {
      this.title = 'edit'
      this.article = this.newsService.getArticle(this.route.snapshot.params['id']);
      this.editArticle();
    }
  }

  editArticle() {
    this.CreateForm.patchValue({
      title: this.article.title,
      description: this.article.description,
      content: this.article.content,
      urlToImage: this.article.urlToImage,
      publishedAt: this.article.publishedAt,
      author: this.article.author,
      url: this.article.url,
      imageType: this.article.imageType
    });
  }

  onSubmit(myForm) {
    if(this.CreateForm.valid){
      if (this.route.snapshot.routeConfig.path === 'create') {
        this.newsService.addArticle(this.CreateForm.value)
      } else {
        this.newsService.editArticle(this.article._id, this.CreateForm.value, this.route.snapshot.params['id']);
      }
    } else {
      console.log('Invalid form')
    }
  }

  onCancel() {
    this.newsService.cancelForm()
  }
}
