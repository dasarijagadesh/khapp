import { TestBed } from '@angular/core/testing';

import { EditnumberService } from './editnumber.service';

describe('EditnumberService', () => {
  let service: EditnumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditnumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
