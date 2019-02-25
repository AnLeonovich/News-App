import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from "./user.service";
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ],
  	providers: [
      UserService
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should check login (not autorized)', async () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(await service.canActivate()).toBe(false);
  });

  it('should check login (autorized)', async () => {
    const service: AuthService = TestBed.get(AuthService);
    const userService = TestBed.get(UserService)
    userService.login()
    expect(await service.canActivate()).toBe(true);
  });

});
