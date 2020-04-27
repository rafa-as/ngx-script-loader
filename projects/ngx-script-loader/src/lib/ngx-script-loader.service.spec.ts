import { TestBed } from '@angular/core/testing';

import { NgxScriptLoaderService } from './ngx-script-loader.service';

describe('NgxScriptLoaderService', () => {
  let service: NgxScriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
