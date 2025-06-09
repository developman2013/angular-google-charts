import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideGoogleCharts } from 'angular-google-charts';
import { StandaloneAppComponent } from './app/standalone-app.component';

bootstrapApplication(StandaloneAppComponent, {
  providers: [
    provideRouter([]),
    provideGoogleCharts({
      mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY',
      version: '49'
    })
  ]
}).catch((err: unknown) => console.error(err));
