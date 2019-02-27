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
  }
];

class MockComponent {}

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [ RouterTestingModule.withRoutes([{path: 'news/0', component: MockComponent}]), HttpClientModule ]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it('should set selected source', () => {
    const service: NewsService = TestBed.get(NewsService);
    service.selectSource(mockSources[0]);
    expect(service.getSource()).toEqual(mockSources[0]);
  });

  it('should set filter', () => {
    const service: NewsService = TestBed.get(NewsService);
    spyOn(service, 'setFilter');
    service.setFilter(['keyword']);
    expect(service.setFilter).toHaveBeenCalled();
  });

  it('should cancel form', (done) => {
    const service: NewsService = TestBed.get(NewsService);
    service.cancelForm();
    done();
  });
});
