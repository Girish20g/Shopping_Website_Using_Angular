import { TestBed } from '@angular/core/testing';

import { OrderhistoryService } from './orderhistory.service';

describe('OrderhistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderhistoryService = TestBed.get(OrderhistoryService);
    expect(service).toBeTruthy();
  });
});
