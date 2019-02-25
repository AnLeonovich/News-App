import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [ RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should login', () => {
    const service: UserService = TestBed.get(UserService);
    service.login();
    expect(service.authorized).toBe(true);
  });

  it('should logout', () => {
    const service: UserService = TestBed.get(UserService);
    service.logout();
    expect(service.authorized).toBe(false);
  });

  it('should return isAuthorized', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.isAuthorized()).toBe(false);
  });

  it('should return async isAuthenticated', async () => {
    const service: UserService = TestBed.get(UserService);
    expect(await service.isAuthenticated()).toBe(false);
  });
  
});
