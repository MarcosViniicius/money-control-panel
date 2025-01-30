import { TestBed } from '@angular/core/testing';

import { RegisEntregaService } from './regis-entrega.service';

describe('RegisEntregaService', () => {
  let service: RegisEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
