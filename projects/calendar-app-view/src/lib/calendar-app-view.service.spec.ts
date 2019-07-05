import { TestBed } from '@angular/core/testing';

import { CalendarAppViewService } from './calendar-app-view.service';

describe('CalendarAppViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarAppViewService = TestBed.get(CalendarAppViewService);
    expect(service).toBeTruthy();
  });
});
