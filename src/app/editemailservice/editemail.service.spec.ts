import { TestBed } from '@angular/core/testing';

import { EditemailService } from './editemail.service';

describe('EditemailService', () => {
  let service: EditemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
