// Quick Start Example - matches documentation exactly
import { Component } from '@angular/core';
import { GoogleChart } from 'angular-google-charts';

@Component({
  selector: 'app-quick-start',
  standalone: true,
  imports: [GoogleChart],
  template: `
    <h1>My Dashboard</h1>
    <google-chart
      type="PieChart"
      [data]="pieChartData"
      [columns]="pieChartColumns"
      [options]="pieChartOptions"
      [width]="500"
      [height]="400"
    >
    </google-chart>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 20px;
      }
      h1 {
        color: #333;
        margin-bottom: 20px;
      }
    `
  ]
})
export class QuickStartComponent {
  pieChartData = [
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ];

  pieChartColumns = ['Task', 'Hours per Day'];

  pieChartOptions = {
    title: 'My Daily Activities',
    pieHole: 0.4
  };
}
