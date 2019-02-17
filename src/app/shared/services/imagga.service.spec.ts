import { TestBed } from '@angular/core/testing';

import { ImaggaService } from './imagga.service';

describe('ImaggaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImaggaService = TestBed.get(ImaggaService);
    expect(service).toBeTruthy();
  });
});
