import { TestBed } from '@angular/core/testing';

import { ProductsFacade } from './products.facade';

describe('ProductsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsFacade = TestBed.get(ProductsFacade);
    expect(service).toBeTruthy();
  });
});
