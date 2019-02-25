import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

const mockSources = [
  {
    id: 'cnn',
    name: 'CNN',
    description: 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
    url: 'http://us.cnn.com',
    category: 'general',
    language: 'en',
    country: 'us'
  },
  {
    id: 'fox-news',
    name: 'Fox News',
    description: 'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
    url: 'http://www.foxnews.com',
    category: 'general',
    language: 'en', 
    country: 'us'
  },
  {
    id: 'google-news',
    name: 'Google News',
    description: 'Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'us'
  },
  {
    id: 'mtv-news',
    name: 'MTV News',
    description: "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
    url: 'http://www.mtv.com/news',
    category: 'entertainment',
    language: 'en',
    country: 'us'
  },
  {
    id: 'national-geographic',
    name: 'National Geographic',
    description: 'Reporting our world daily: original nature and science news from National Geographic.',
    url: 'http://news.nationalgeographic.com',
    category: 'science',
    language: 'en',
    country: 'us'
  },
  {
    id: 'the-new-york-times',
    name: 'The New York Times',
    description: 'The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.',
    url: 'http://www.nytimes.com',
    category: 'general',
    language: 'en',
    country: 'us'
  },
  {
    id: 'the-wall-street-journal',
    name: 'The Wall Street Journal',
    description: 'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.',
    url: 'http://www.wsj.com',
    category: 'business',
    language: 'en',
    country: 'us'
  },
  {
    id: 'the-washington-times',
    name: 'The Washington Times',
    description: 'The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.',
    url: 'https://www.washingtontimes.com/',
    category: 'general',
    language: 'en',
    country: 'us'
  },
  {
    id: 'usa-today',
    name: 'USA Today',
    description: 'Get the latest national, international, and political news at USATODAY.com.',
    url: 'http://www.usatoday.com/news',
    category: 'general',
    language: 'en',
    country: 'us'
  },
  {
    name: 'All sources',
    id: 'cnn,fox-news,google-news,mtv-news,national-geographic,the-new-york-times,the-wall-street-journal,the-washington-times,usa-today'
  },
  {
    name: 'Local News',
    id: 'local'
  }
];

const mockArticle = {
  author: "Cool User",
  content: "A migrant caravan has made its way to the Texas border, more family members are being apprehended than ever before and numerous large groups of Central American migrants are crossing illegally into the US.Congressional Democrats have pushed back on the White House plans, arguing that the President is fearmongering and that the situation on the border in no way qualifies as a national emergency. 'No sensible person believes there is an emergency at the southern border. Illegal immigration is at record lows, and families with children who lawfully seek asylum are not foreign invaders', said House Judiciary Committee Chairman Jerry Nadler (D-New York), in a statement Thursday. Nadler said he will support a resolution to terminate the President's emergency declaration, should he issue one.",
  description: "Officials tasked with carrying out the nation's border security mission are facing a trifecta of migration challenges.",
  publishedAt: "2019-02-15T11:47:29Z",
  source: {"id": "local", "name": "Local"},
  title: "This is the test title",
  url: "",
  urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190207113233-border-wall-us-mexico-super-tease.jpg",
  imageType: "URL"
};

const mockNewValue = {
  author: "Cool User Elsy",
  content: "A migrant caravan has made its way to the Texas border, more family members are being apprehended than ever before and numerous large groups of Central American migrants are crossing illegally into the US.Congressional Democrats have pushed back on the White House plans, arguing that the President is fearmongering and that the situation on the border in no way qualifies as a national emergency. 'No sensible person believes there is an emergency at the southern border. Illegal immigration is at record lows, and families with children who lawfully seek asylum are not foreign invaders', said House Judiciary Committee Chairman Jerry Nadler (D-New York), in a statement Thursday. Nadler said he will support a resolution to terminate the President's emergency declaration, should he issue one.",
  description: "Officials tasked with carrying out the nation's border security mission are facing a trifecta of migration challenges.",
  publishedAt: "2019-02-15T11:47:29Z",
  source: {"id": "local", "name": "Local"},
  title: "This is the test title",
  url: "",
  urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190207113233-border-wall-us-mexico-super-tease.jpg",
  imageType: "URL"
};

class MockComponent {}

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [ RouterTestingModule.withRoutes([{path: 'news/0', component: MockComponent}]), HttpClientModule ]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it('should get sources', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    await service.getSources().subscribe(result => {
      expect(result).toEqual(mockSources)
      done();
    });
  });

  it('should return soutces if they are already gotten', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    await service.getSources().subscribe(async (result) => {
      await service.getSources().subscribe((result) => {
        expect(result).toEqual(mockSources)
      })
    });
    done();
  });

  it('should set selected source', () => {
    const service: NewsService = TestBed.get(NewsService);
    service.selectSource(mockSources[0]);
    expect(service.getSource()).toEqual(mockSources[0]);
  });

  it('should get articles', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    service.selectSource(mockSources[0]);
    await service.getArticles().subscribe(result => {
      expect(result.length).toBeGreaterThan(0)
      done();
    });
  });

  it('should get articles from local source', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    service.selectSource(mockSources[10]);
    await service.getArticles().subscribe(result => {
      expect(result.length).toBeGreaterThan(0)
      done();
    });
  });

  it('should get article', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    service.selectSource(mockSources[0]);
    await service.getArticles().subscribe(result => {
      expect(service.getArticle(0)).toBeDefined()
      })
    done();
  });

  it('should set filter', () => {
    const service: NewsService = TestBed.get(NewsService);
    spyOn(service, 'setFilter');
    service.setFilter(['keyword']);
    expect(service.setFilter).toHaveBeenCalled();
  });

  it('should add article', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service.addArticle(mockArticle)).toBeDefined();
    done()
  });

  it('should edit article', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    let articleId;
    let path;
    service.selectSource(mockSources[10]);
    await service.getArticles().subscribe( async (result) => {
      articleId = result[0]._id;
      path = result[0].id;
      service.editArticle(articleId, mockNewValue, path)
      await service.getArticles().subscribe(result => {
        expect(result[0].author).toEqual(mockNewValue.author)
      });
    });

    done()
  });

  it('should delete article', async (done) => {
    const service: NewsService = TestBed.get(NewsService);
    let articleId;
    service.selectSource(mockSources[10]);
    await service.getArticles().subscribe((result) => {
      articleId = result[1]._id;
      expect(service.deleteArticle(articleId, true)).toBeDefined();
    });
    done();
  });

  it('should cancel form', (done) => {
    const service: NewsService = TestBed.get(NewsService);
    service.cancelForm();
    done();
  });
});
