import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserService } from '../../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';

const customMatchers = {
  toBeActive: function() {
    return {
      compare: function(actual) {
        let result = { pass: actual.status === 'active', message: ''} 
        if (result.pass) {
          result.message = `Expected status NOT to be 'active'`;
        } else {
          result.message = `Expected status: 'active' but get '${actual.status}'`;
        }
         return result;
      }
    }
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    jasmine.addMatchers(customMatchers);
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    const service: UserService = TestBed.get(UserService);
    component.login();
    expect(service.isAuthorized()).toBe(true)
  });

  it('should logout', () => {
    const service: UserService = TestBed.get(UserService);
    component.logout();
    expect(service.isAuthorized()).toBe(false)
  });

  it('custom matcher - pass', () => {
    expect({
      status: 'active'
    }).toBeActive()
  });

  it('custom matcher - error', () => {
    expect({
      status: 'not-active'
    }).toBeActive()
  });

  it('custom matcher - error 2', () => {
    expect({
      status: 'active'
    }).not.toBeActive()
  });
});
