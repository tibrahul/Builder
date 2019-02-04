import { TestBed } from '@angular/core/testing';

import { GeneratonFlowsService } from './generaton-flows.service';

describe('GeneratonFlowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratonFlowsService = TestBed.get(GeneratonFlowsService);
    expect(service).toBeTruthy();
  });
});
