import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { funcionGuard } from './funcion.guard';

describe('funcionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => funcionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
