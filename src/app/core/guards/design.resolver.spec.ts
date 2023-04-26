import { TestBed } from '@angular/core/testing';

import { DesignResolver } from './design.resolver';

describe('DesignResolver', () => {
  let resolver: DesignResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DesignResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
