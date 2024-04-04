import { TestBed } from '@angular/core/testing';

import { ReclusoservService } from './reclusoserv.service';

describe('ReclusoservService', () => {
  let service: ReclusoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclusoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
