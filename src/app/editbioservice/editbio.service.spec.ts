import { TestBed } from '@angular/core/testing';

import { EditbioService } from './editbio.service';

describe('EditbioService', () => {
  let service: EditbioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditbioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
