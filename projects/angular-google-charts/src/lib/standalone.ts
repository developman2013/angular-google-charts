// Standalone component versions
import { Component } from '@angular/core';
import { GoogleChartComponent } from './components/google-chart/google-chart.component';
import { ChartWrapperComponent } from './components/chart-wrapper/chart-wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ControlWrapperComponent } from './components/control-wrapper/control-wrapper.component';
import { ChartEditorComponent } from './components/chart-editor/chart-editor.component';

// Create standalone versions by copying the metadata and setting standalone: true
@Component({
  selector: 'google-chart',
  template: '',
  styles: [':host { width: fit-content; display: block; }'],
  host: { class: 'google-chart' },
  exportAs: 'googleChart',
  standalone: true
})
export class GoogleChart extends GoogleChartComponent {}

@Component({
  selector: 'chart-wrapper',
  template: '',
  styles: [':host { width: fit-content; display: block; }'],
  host: { class: 'chart-wrapper' },
  exportAs: 'chartWrapper',
  standalone: true
})
export class ChartWrapper extends ChartWrapperComponent {}

@Component({
  selector: 'dashboard',
  template: '<ng-content></ng-content>',
  exportAs: 'dashboard',
  host: { class: 'dashboard' },
  standalone: true
})
export class Dashboard extends DashboardComponent {}

@Component({
  selector: 'control-wrapper',
  template: '',
  host: { class: 'control-wrapper' },
  exportAs: 'controlWrapper',
  standalone: true
})
export class ControlWrapper extends ControlWrapperComponent {}

@Component({
  selector: 'chart-editor',
  template: `<ng-content></ng-content>`,
  host: { class: 'chart-editor' },
  standalone: true
})
export class ChartEditor extends ChartEditorComponent {}

// Re-export provider function
export { provideGoogleCharts } from './providers';
