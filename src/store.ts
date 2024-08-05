import { signalStore, withState } from '@ngrx/signals';
export const testSignalStore = signalStore(withState({ test: '1' }));
