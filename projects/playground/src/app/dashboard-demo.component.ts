import { Component } from '@angular/core';
import { Dashboard, ControlWrapper, GoogleChart } from 'angular-google-charts';

@Component({
  selector: 'app-dashboard-demo',
  standalone: true,
  imports: [Dashboard, ControlWrapper, GoogleChart],
  template: `
    <h2>Interactive Dashboard Demo</h2>
    <dashboard [columns]="dashboardColumns" [data]="dashboardData">
      <control-wrapper [for]="myChart" type="CategoryFilter"></control-wrapper>
      <google-chart #myChart type="ColumnChart" [data]="dashboardData"></google-chart>
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
  dashboardColumns = ['Category', 'Value'];
  dashboardData = [
    ['A', 20],
    ['B', 35],
    ['C', 40],
    ['D', 25],
    ['E', 30]
  ];
}
