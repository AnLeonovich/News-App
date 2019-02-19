import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private NEWS_CHANNELS = ['cnn', 'google-news', 'the-washington-times', 'the-new-york-times', 'national-geographic',
  'fox-news', 'usa-today', 'the-wall-street-journal', 'mtv-news']
  private selectedSource;
  public articles;
  public updatedSource: EventEmitter<any> = new EventEmitter();
  public updateFilter: EventEmitter<[{}]> = new EventEmitter();
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private http: HttpClient, private router: Router) { }

  public getSources() {
    return this.http.get<any>('https://newsapi.org/v2/sources?apiKey=e3215bd34807454996b9c3b1444aa82a')
    .pipe(
        map((response) => {
          let sourcesList = []
          let allSources = []
          let i = 0
          while (i < response.sources.length) {
            if (this.NEWS_CHANNELS.indexOf(response.sources[i].id) >= 0) {
              sourcesList.push(response.sources[i])
              allSources.push(response.sources[i].id)
            }
            i++
          }

          sourcesList.push({name: 'All sources', id: allSources.join(',')}, {name: 'Local News', id: 'local'})

          return sourcesList
        })
      );
  }

  public selectSource(source) {
    this.selectedSource = source;
    this.updatedSource.emit(source.id)
  }

  public getSource() {
    return this.selectedSource;
  }

  public getArticles() {
    if (this.selectedSource.id !== 'local') {
      return this.http.get<any>(`https://newsapi.org/v2/top-headlines?sources=${this.selectedSource.id}&apiKey=e3215bd34807454996b9c3b1444aa82a`)
      .pipe(
        map((response) => {
          this.articles = response.articles.map((article, index) => {
            return {...article, id: index }
          })
          return this.articles;
        })
      );
    } else {
      return this.http.get<any>(`http://localhost:3000/`)
      .pipe(
        map((response) => {
          this.articles = response.map((article, index) => {
            return {...article, id: index }
          })
          return this.articles;
        })
      );
    }
  }

  public getArticle(id) {
    let article = this.articles.filter((article) => {
      return article.id === parseInt(id);
    })

    return article[0];
  }

  public setFilter(keyword) {
    this.updateFilter.emit(keyword);
  }

  public editArticle(id, newValue) {
    return this.http.put(`http://localhost:3000/news/${id}`, JSON.stringify(newValue), { ...this.httpOptions, responseType: 'text'}).subscribe((data: any)=> {
      this.router.navigate(['/']);
    });    
  }

  public addArticle(newArticle) {
    return this.http.post(`http://localhost:3000/news`, JSON.stringify(newArticle), { ...this.httpOptions, responseType: 'text'}).subscribe((data:any)=>{
      this.router.navigate(['/']);
    });
  }

  public deleteArticle(id) {
    return this.http.delete(`http://localhost:3000/news/${id}`, { ...this.httpOptions, responseType: 'text'}).subscribe();
  }
}
