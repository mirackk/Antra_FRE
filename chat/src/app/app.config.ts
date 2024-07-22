import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { routes } from './app.routes';
import { appStoreConfig } from './app.store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const socketConfig: SocketIoConfig = { url: 'http://localhost:2077', options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ...appStoreConfig,
    importProvidersFrom(SocketIoModule.forRoot(socketConfig)),
    importProvidersFrom(CommonModule),
    importProvidersFrom(FormsModule)
  ]
};
