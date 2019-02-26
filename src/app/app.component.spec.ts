import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { Router, RouterOutlet } from "@angular/router";
import { UserService } from './services/user.service';

class MockRouter { public navigate() {}; }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
      ],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: Router,  useClass: MockRouter },
        UserService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
