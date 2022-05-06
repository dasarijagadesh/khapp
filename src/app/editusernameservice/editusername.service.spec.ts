import { TestBed } from '@angular/core/testing';

import { EditusernameService } from './editusername.service';

describe('EditusernameService', () => {
  let service: EditusernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditusernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
