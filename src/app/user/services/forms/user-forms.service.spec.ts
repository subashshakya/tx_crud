import { TestBed } from '@angular/core/testing';

import { UserFormsService } from './user-forms.service';

describe('UserFormsService', () => {
  let service: UserFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
