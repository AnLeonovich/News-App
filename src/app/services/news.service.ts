import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';
import { Sources } from '../models/sources'
import { News } from '../models/news'
import { LocalNews } from '../models/local'

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private newsChnnels = environment.newsChnnels;
  private selectedSource;
  public articles;
  public updatedSource: EventEmitter<any> = new EventEmitter();
  public updateFilter: EventEmitter<[{}]> = new EventEmitter();
  private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
  public sourcesList;

  constructor(private http: HttpClient, private router: Router) {}

  public getSources() {


    if (this.sourcesList) {
      return this.sourcesList
    } else {
      return this.http.get<Sources>(environment.sourcesURL)
      .pipe(
          map((response) => {
            this.sourcesList = []
            let allSources = []
            let i = 0
            while (i < response.sources.length) {
              if (this.newsChnnels.indexOf(response.sources[i].id) >= 0) {
                this.sourcesList.push(response.sources[i])
                allSources.push(response.sources[i].id)
              }
              i++
            }

            this.sourcesList.push({name: 'All sources', id: allSources.join(',')}, {name: 'Local News', id: 'local'})
            return this.sourcesList
          })
        );
    }
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
      return this.http.get<News>(`${environment.topHeadlines}${this.selectedSource.id}${environment.apiKey}`)
      .pipe(
        map((response) => {
          this.articles = response.articles.map((article, index) => {
            return {...article, id: index }
          })
          return this.articles;
        })
      );
    } else {
      return this.http.get<Array<LocalNews>>(`${environment.localService}`)
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

  public editArticle(id, newValue, path) {
    return this.http.put(`${environment.localServiceNews}${id}`, JSON.stringify(newValue), { ...this.httpOptions, responseType: 'text'}).subscribe((data: any)=> {
      this.getArticles().subscribe((data) => {
        this.router.navigate([`/news/${path}`]);
      })
    });    
  }

  public addArticle(newArticle) {
    return this.http.post(`${environment.localServiceNews}`, JSON.stringify(newArticle), { ...this.httpOptions, responseType: 'text'}).subscribe((data:any)=>{
      this.router.navigate(['/']);
      this.selectSource({name: 'Local News', id: 'local'})
    });
  }

  public deleteArticle(id, shouldNavigate) {
    return this.http.delete(`${environment.localServiceNews}${id}`, { ...this.httpOptions, responseType: 'text'}).subscribe(() => {
      if (shouldNavigate) {
        this.router.navigate(['/']);
      }
    });
  }

  public cancelForm() {
    this.router.navigate(['/']);
  }
}
