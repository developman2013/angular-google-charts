import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { ScriptLoaderService } from './services/script-loader.service';
import { DataTableService } from './services/data-table.service';
import { GoogleChartsConfig, GOOGLE_CHARTS_CONFIG } from './types/google-charts-config';

/**
 * Provides the necessary services for using Google Charts standalone components.
 *
 * @param config Optional configuration for Google Charts
 * @returns Environment providers for Google Charts
 *
 * @example
 * ```typescript
 * import { bootstrapApplication } from '@angular/platform-browser';
 * import { provideGoogleCharts } from 'angular-google-charts';
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideGoogleCharts({ version: '49' })
 *   ]
 * });
 * ```
 */
export function provideGoogleCharts(config: GoogleChartsConfig = {}): EnvironmentProviders {
  return makeEnvironmentProviders([
    ScriptLoaderService,
    DataTableService,
    { provide: GOOGLE_CHARTS_CONFIG, useValue: config }
  ]);
}
