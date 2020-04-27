import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { combineLatest } from 'rxjs';

import { ScriptLoaderService } from './script-loader.service';

describe('NgxScriptLoaderService', () => {
  let service: ScriptLoaderService;
  let document: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptLoaderService]
    });

    service = TestBed.get(ScriptLoaderService);
    document = TestBed.get(DOCUMENT);

    document.querySelectorAll('head script[src$="example.com"]').forEach((item) => item.remove());
    document.querySelectorAll('body script[src$="example.com"]').forEach((item) => item.remove());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadScript', () => {
    it('should inject the script', (done) => {
      const scriptUrl = 'http://example.com';
      service.loadScript(scriptUrl).subscribe(() => {
        expect(document.querySelector('head script').getAttribute('src')).toBe(scriptUrl);
        done();
      });
    });

    it('should inject the script to correct target', (done) => {
      const scriptUrl = 'http://example.com';
      service.loadScript(scriptUrl, {}, 'body').subscribe(() => {
        expect(document.querySelector('body script[src$="example.com"]')).not.toBeNull();
        done();
      });
    });
  });

  describe('runScript', () => {
    it('should inject the script', (done) => {
      const scriptUrl = 'http://example.com';
      service.runScript(scriptUrl).subscribe(() => {
        expect(document.querySelector('head script').getAttribute('src')).toBe(scriptUrl);
        done();
      });
    });

    it('should inject the script to correct target', (done) => {
      const scriptUrl = 'http://example.com';
      service.runScript(scriptUrl, {}, 'body').subscribe(() => {
        expect(document.querySelector('body script[src$="example.com"]')).not.toBeNull();
        done();
      });
    });

    it('should inject multiple script if you call runScript multiple times', (done) => {
      const scriptUrl = 'http://example.com';

      combineLatest(
        service.runScript(scriptUrl, {}, 'body'),
        service.runScript(scriptUrl, {}, 'body'),
        service.runScript(scriptUrl, {}, 'body')
      ).subscribe(() => {
        expect(document.querySelectorAll('body script[src$="example.com"]').length).toBe(3);
        done();
      });
    });
  });
});
