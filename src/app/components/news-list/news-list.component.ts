import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  private limit: number = 4;
  private learnMore: boolean = true;
  private hideExtra: boolean = false;
  public articleList;
  public filterValue = [];
  public show: boolean = false;
  public filterCount = { count: 0 };
  constructor(public newsService: NewsService) {
    this.newsService.updatedSource.subscribe((data: any)=>{
      if(data === 'local') {
        this.show = true;
      } else {
        this.show = false;
      }
      this.newsService.getArticles().subscribe((data: any) => {
        this.articleList = data;
        this.hide();
      });    
    })
  }

  ngOnInit() {
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

}
