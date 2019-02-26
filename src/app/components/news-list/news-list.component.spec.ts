import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { TitleComponent } from '../../sharedComponents/title/title.component'
import { ControlsComponent } from '../controls/controls.component'
import { FilterPipe } from '../../pipes/filter.pipe'
import { ArticleComponent } from '../article/article.component'
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../../services/news.service'

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListComponent, TitleComponent, ControlsComponent, FilterPipe, ArticleComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule ],
      providers: [
        NewsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show and hide extra articles', () => {
    component.articleList = [{test: 'test'}]
    component.showMore();
    expect(component.learnMore).toBe(false);
    component.hide()
    expect(component.learnMore).toBe(true);
  });

  it('should delete article', () => {
    component.articleList = [{_id: 'test'}, {_id: 'test2'}]
    component.onDelete('test')
    expect(component.articleList.length).toBe(1);
  });

  it('should subscribe on source changes', () => {
    const newsService: NewsService = TestBed.get(NewsService);
    newsService.selectSource({id: 'local', name: 'Local News'})
    expect(component).toBeTruthy();
  });

  it('should subscribe on filter changes', () => {
    const newsService: NewsService = TestBed.get(NewsService);
    newsService.setFilter('keyword');
    expect(component.filterValue).toEqual(['keyword']);
  });
});
