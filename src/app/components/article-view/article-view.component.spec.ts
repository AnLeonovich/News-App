import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user.service';
import { ArticleViewComponent } from './article-view.component';
import { TitleComponent } from '../../sharedComponents/title/title.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../../services/news.service'
// import { Router, RouterOutlet, RouterLink } from "@angular/router";
// class MockRouter { public navigate() {}; }

describe('ArticleViewComponent', () => {
  let component: ArticleViewComponent;
  let fixture: ComponentFixture<ArticleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ArticleViewComponent,
      TitleComponent
      ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [
        UserService,
        NewsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
