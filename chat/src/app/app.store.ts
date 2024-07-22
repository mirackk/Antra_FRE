import { isDevMode } from '@angular/core';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { chatReducer } from './state/chat.reducer';
import { ChatEffects } from './state/chat.effects';

export const appStoreConfig = [
  provideStore({ chat: chatReducer }),
  provideEffects([ChatEffects]),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode(),
  }),
];
