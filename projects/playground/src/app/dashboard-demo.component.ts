// Dashboard with Controls Example - matches documentation
import { Component } from '@angular/core';
import { Dashboard, ControlWrapper, GoogleChart } from 'angular-google-charts';

@Component({
  selector: 'app-dashboard-demo',
  standalone: true,
  imports: [Dashboard, ControlWrapper, GoogleChart],
  template: `
    <h2>Interactive Dashboard Demo</h2>
    <dashboard [data]="dashboardData" [columns]="dashboardColumns">
      <control-wrapper [for]="myChart" type="CategoryFilter"></control-wrapper>
      <google-chart #myChart type="ColumnChart"></google-chart>
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
export class DashboardDemoComponent {
  dashboardData = [
    ['A', 20],
    ['B', 35],
    ['C', 40],
    ['D', 25],
    ['E', 30]
  ];

  dashboardColumns = ['Category', 'Value'];
}
