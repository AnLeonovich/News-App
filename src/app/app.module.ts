import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateOrEditComponent } from './components/create-or-edit/create-or-edit.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { TitleComponent } from './sharedComponents/title/title.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ArticleComponent } from './components/article/article.component';

const AppRoutes: Routes = [
  {path: '', component: NewsListComponent },
  {path: 'news/:id', component: ArticleViewComponent},
  {path: 'create', component: CreateOrEditComponent},
  {path: 'edit', component: CreateOrEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateOrEditComponent,
    NewsListComponent,
    ArticleViewComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    ControlsComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
