import { GoogleChartsConfig } from '../types/google-charts-config';

export function getDefaultConfig(): GoogleChartsConfig {
  return {
    version: 'current',
    safeMode: false
  };
}
