import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { appStoreConfig } from './app.store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    ...appStoreConfig
  ]
};
