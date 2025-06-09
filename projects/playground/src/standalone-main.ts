import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideGoogleCharts } from 'angular-google-charts';
import { StandaloneAppComponent } from './app/standalone-app.component';
import { environment } from './environments/environment';

if (environment.production) {
  // enableProdMode(); // This is done automatically in Angular 19+
}

bootstrapApplication(StandaloneAppComponent, {
  providers: [
    provideRouter([]),
    provideGoogleCharts({
      mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY',
      version: '49'
    })
  ]
}).catch(err => console.error(err));
