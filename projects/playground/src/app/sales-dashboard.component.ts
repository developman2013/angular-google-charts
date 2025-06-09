// Advanced Dashboard Example - from documentation
import { Component } from '@angular/core';
import { Dashboard, ControlWrapper, GoogleChart } from 'angular-google-charts';

@Component({
  selector: 'app-sales-dashboard',
  standalone: true,
  imports: [Dashboard, ControlWrapper, GoogleChart],
  template: `
    <h2>Sales Dashboard</h2>
    <dashboard [data]="salesData" [columns]="salesColumns">
      <!-- Date range filter -->
      <control-wrapper [for]="[salesChart, regionChart]" type="DateRangeFilter" [options]="dateFilterOptions">
      </control-wrapper>

      <!-- Category filter -->
      <control-wrapper [for]="salesChart" type="CategoryFilter" [options]="categoryFilterOptions"> </control-wrapper>

      <!-- Charts controlled by filters -->
      <google-chart #salesChart type="LineChart"></google-chart>
      <google-chart #regionChart type="GeoChart"></google-chart>
    </dashboard>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 20px;
      }
      h2 {
        color: #333;
        margin-bottom: 20px;
      }
    `
  ]
})
export class SalesDashboardComponent {
  salesData = [
    ['Date', 'Region', 'Sales'],
    [new Date(2024, 0, 1), 'North', 1000],
    [new Date(2024, 0, 2), 'South', 1200],
    [new Date(2024, 0, 3), 'East', 800],
    [new Date(2024, 0, 4), 'West', 1500],
    [new Date(2024, 0, 5), 'North', 1100],
    [new Date(2024, 0, 6), 'South', 1300]
  ];

  salesColumns = ['Date', 'Region', 'Sales'];

  dateFilterOptions = {
    filterColumnIndex: 0
  };

  categoryFilterOptions = {
    filterColumnIndex: 1,
    ui: { caption: 'Choose a region...' }
  };
}
