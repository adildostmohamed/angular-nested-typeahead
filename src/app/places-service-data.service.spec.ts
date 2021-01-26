import { TestBed } from '@angular/core/testing';

import { PlacesServiceDataService } from './places-service-data.service';

describe('PlacesServiceDataService', () => {
  let service: PlacesServiceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesServiceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
