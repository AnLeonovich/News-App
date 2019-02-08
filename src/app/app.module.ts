import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorizationComponent } from './header/authorization/authorization.component';
import { ControlsComponent } from './header/controls/controls.component';
import { SelectSourceComponent } from './header/controls/select-source/select-source.component';
import { FilterComponent } from './header/controls/filter/filter.component';
import { CheckboxComponent } from './header/controls/checkbox/checkbox.component';
import { AddArticleComponent } from './header/controls/add-article/add-article.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './main/title/title.component';
import { NewsComponent } from './main/news/news.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './main/news/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationComponent,
    ControlsComponent,
    SelectSourceComponent,
    FilterComponent,
    CheckboxComponent,
    AddArticleComponent,
    MainComponent,
    TitleComponent,
    NewsComponent,
    FooterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
