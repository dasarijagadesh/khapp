import { TestBed } from '@angular/core/testing';

import { EditnameService } from './editname.service';

describe('EditnameService', () => {
  let service: EditnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
