import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),
    HttpClientModule, 
    provideAnimations(), 
    provideToastr({ timeOut: 3000, preventDuplicates: true}), 
    provideRouter(routes), 
    provideClientHydration()]
};
