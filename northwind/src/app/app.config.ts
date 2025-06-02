import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideToastr({
      timeOut: 2500,
      preventDuplicates: false,
      closeButton: true,
      countDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: "toast-bottom-right",
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ]
};
