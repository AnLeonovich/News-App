import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';


describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientModule ],
      declarations: [ ControlsComponent ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkbox should work', () => {
    const service: UserService = TestBed.get(UserService);
    service.login();
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const checkbox = nativeElement.querySelector('.createdByMe input');
    const filterInput = nativeElement.querySelector('.filter');
    const filterButton = nativeElement.querySelector('.filter-button');
    filterInput.value = '123';
    checkbox.dispatchEvent(new Event('change'));
    filterButton.dispatchEvent(new Event('click'));
    expect(component.checked).toBe(true);
  });  

  it('select should work', () => {
    component.sourceList =  [
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
      }]
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const select = nativeElement.querySelector('select');
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
