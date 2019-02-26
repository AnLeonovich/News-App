import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditComponent } from './create-or-edit.component';
import { TitleComponent } from '../../sharedComponents/title/title.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { NewsService } from '../../services/news.service'

const mockRouterCreate = {
  snapshot: {
    routeConfig: {
      path: 'create'
    }
  }
}

const mockRouterEdit = {
  snapshot: {
    routeConfig: {
      path: 'edit'
    },
    params: 0
  }
}

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
    }

class MockNews {
  public getArticle() {
    return mockArticle;
  }
}

describe('CreateOrEditComponent', () => {
  let component: CreateOrEditComponent;
  let fixture: ComponentFixture<CreateOrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditComponent, TitleComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouterCreate }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form, cancel form and check if invalid', () => {
    const nativeElement = fixture.nativeElement;
    const submit = nativeElement.querySelector('form');
    submit.dispatchEvent(new Event('submit'));
    const cancel = nativeElement.querySelector('.cancel-button');
    cancel.dispatchEvent(new Event('click'));
    expect(component).toBeTruthy();
  });

  it('should add valid article', () => {
    component.CreateForm.patchValue({
      title: 'test',
      description: 'test',
      content: 'test',
      urlToImage: 'test',
      publishedAt: 'test',
      author: 'test',
      url: 'test',
      imageType: 'test'
    });
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const submit = nativeElement.querySelector('form');
    submit.dispatchEvent(new Event('submit'));
    expect(component).toBeTruthy();
  }); 
});

describe('CreateOrEditComponent', () => {
  let component: CreateOrEditComponent;
  let fixture: ComponentFixture<CreateOrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditComponent, TitleComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouterEdit },
        {provide: NewsService, useClass: MockNews}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create edit form', () => {
    expect(component).toBeTruthy();
  });

  it('should edit valid article', () => {
    component.CreateForm.patchValue({
      title: 'test',
      description: 'test',
      content: 'test',
      urlToImage: 'test',
      publishedAt: 'test',
      author: 'test',
      url: 'test',
      imageType: 'test'
    });
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const submit = nativeElement.querySelector('form');
    submit.dispatchEvent(new Event('submit'));
    expect(component).toBeTruthy();
  });
});
