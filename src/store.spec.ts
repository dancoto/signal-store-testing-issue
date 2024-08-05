import { TestBed } from '@angular/core/testing';
import { testSignalStore } from './store';
import { patchState } from '@ngrx/signals';

describe('store', () => {
  let store: InstanceType<typeof testSignalStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [testSignalStore],
    });

    store = TestBed.inject(testSignalStore);
  });

  describe('failing test', () => {
    it('should work when using patchState', () => {
      patchState(store, { test: '2' });
    });
  });
});
