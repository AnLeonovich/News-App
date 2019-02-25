import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleComponent } from './article.component';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = {
      author: "Cool User",
      content: "A migrant caravan has made its way to the Texas border, more family members are being apprehended than ever before and numerous large groups of Central American migrants are crossing illegally into the US.Congressional Democrats have pushed back on the White House plans, arguing that the President is fearmongering and that the situation on the border in no way qualifies as a national emergency. 'No sensible person believes there is an emergency at the southern border. Illegal immigration is at record lows, and families with children who lawfully seek asylum are not foreign invaders', said House Judiciary Committee Chairman Jerry Nadler (D-New York), in a statement Thursday. Nadler said he will support a resolution to terminate the President's emergency declaration, should he issue one.",
      description: "Officials tasked with carrying out the nation's border security mission are facing a trifecta of migration challenges.",
      publishedAt: "2019-02-15T11:47:29Z",
      source: {"id": "local", "name": "Local"},
      title: "This is the test title",
      url: "",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/190207113233-border-wall-us-mexico-super-tease.jpg",
      imageType: "URL"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
