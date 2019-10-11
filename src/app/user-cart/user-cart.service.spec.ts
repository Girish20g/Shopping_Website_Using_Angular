import { TestBed } from '@angular/core/testing';

import { UserCartService } from './user-cart.service';

describe('UserCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCartService = TestBed.get(UserCartService);
    expect(service).toBeTruthy();
  });
});
