import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news'
import { LocalNews } from '../../models/local'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public limit: number = 4;
  public learnMore: boolean = true;
  public hideExtra: boolean = false;
  public articleList;
  public filterValue = [];
  public show: boolean = false;
  public filterCount = { count: 0 };
  private updatedSourceSubscription;
  constructor(public newsService: NewsService) {}

  ngOnInit() {
    this.updatedSourceSubscription = this.newsService.updatedSource.subscribe((data: any)=>{
      this.show = (data === 'local')
      this.newsService.getArticles().subscribe((data: News | LocalNews) => {
        this.articleList = data;
        this.hide();
      });    
    })
    
    this.newsService.updateFilter.subscribe((data: any)=>{
      this.filterValue = data.split(' ');
    })
  }

  showMore() {
    this.limit = this.articleList.length;
    this.learnMore = false;
    this.hideExtra = true;
  }

  hide() {
    this.limit = 4;
    this.learnMore = true;
    this.hideExtra = false;
  }

  onDelete(id) {
    this.articleList = this.articleList.filter(article => article._id !== id)
  }

  ngOnDestroy() {
    this.updatedSourceSubscription.unsubscribe()
  }
}
