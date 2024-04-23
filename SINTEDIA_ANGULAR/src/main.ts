import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InicioComponent } from './app/inicio/inicio.component';

bootstrapApplication(InicioComponent, appConfig)
  .catch((err) => console.error(err));
