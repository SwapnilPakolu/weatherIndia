import { TestBed, inject } from '@angular/core/testing';

import { TopFiveCitiesService } from './top-five-cities.service';

describe('TopFiveCitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopFiveCitiesService]
    });
  });

  it('should be created', inject([TopFiveCitiesService], (service: TopFiveCitiesService) => {
    expect(service).toBeTruthy();
  }));
});
