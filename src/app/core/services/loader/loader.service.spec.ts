import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have showLoader$ observable emitting false initially', () => {
    service.showLoader$.subscribe((value) => {
      expect(value).toBe(false);
    });
  });

  it('should emit true when showLoader() is called', () => {
    service.showLoader();

    service.showLoader$.subscribe((value) => {
      expect(value).toBe(true);
    });
  });

  it('should emit false when hideLoader() is called', () => {
    service.hideLoader();

    service.showLoader$.subscribe((value) => {
      expect(value).toBe(false);
    });
  });
});
