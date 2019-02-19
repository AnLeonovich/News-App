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
  public article;

  public headingControl: FormControl = new FormControl('', [Validators.required]);
  public descriptionControl: FormControl = new FormControl('', [Validators.required]);
  public contentControl: FormControl = new FormControl('', [Validators.required]);
  public imageControl: FormControl = new FormControl('', [Validators.required]);
  public dateControl: FormControl = new FormControl('');
  public authorControl: FormControl = new FormControl('');
  public sourceControl: FormControl = new FormControl('');
  public imageTypeControl: FormControl = new FormControl('');

  public articleFormGroup: FormGroup = new FormGroup({
    title: this.headingControl,
    description: this.descriptionControl,
    content: this.contentControl,
    urlToImage: this.imageControl,
    publishedAt: this.dateControl,
    author: this.authorControl,
    url: this.sourceControl,
    imageType: this.imageTypeControl
  });

  constructor(private route: ActivatedRoute, public userService: UserService, public newsService: NewsService) {
    if (this.route.snapshot.routeConfig.path === 'create') {
      this.title = this.route.snapshot.routeConfig.path;
    } else {
      this.title = 'edit'
      this.article = this.newsService.getArticle(this.route.snapshot.params['id']);
      this.editArticle();
    }
  } 

  ngOnInit() {}

  editArticle() {
    this.headingControl.setValue(this.article.title);
    this.descriptionControl.setValue(this.article.description);
    this.contentControl.setValue(this.article.content);
    this.imageControl.setValue(this.article.urlToImage);
    this.dateControl.setValue(this.article.publishedAt);
    this.authorControl.setValue(this.article.author);
    this.sourceControl.setValue(this.article.url);
    this.imageTypeControl.setValue(this.article.imageType);
  }

  onSubmit(myForm) {
    if(this.articleFormGroup.valid){
      if (this.route.snapshot.routeConfig.path === 'create') {
        this.newsService.addArticle(this.articleFormGroup.value)
      } else {
        this.newsService.editArticle(this.article._id, this.articleFormGroup.value);
      }
    } else {
      console.log('Invalid form')
    }
  }

}
