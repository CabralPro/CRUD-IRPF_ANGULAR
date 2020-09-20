import { TestBed } from '@angular/core/testing';

import { IrpfService } from './irpf.service';

describe('IrpfService', () => {
  let service: IrpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
