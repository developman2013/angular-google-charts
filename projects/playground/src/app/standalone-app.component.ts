import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuickStartComponent } from './quick-start.component';
import { DashboardDemoComponent } from './dashboard-demo.component';
import { SalesDashboardComponent } from './sales-dashboard.component';
import { ChartEditorDemoComponent } from './chart-editor-demo.component';
import { CustomChartComponent } from './custom-chart.component';
import { EventsDemoComponent } from './events-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    QuickStartComponent,
    DashboardDemoComponent,
    SalesDashboardComponent,
    ChartEditorDemoComponent,
    CustomChartComponent,
    EventsDemoComponent
  ],
  template: `
    <div class="container">
      <header>
        <h1>Angular Google Charts - Standalone Components Demo</h1>
        <p>Complete showcase of all library features as documented in the README</p>
      </header>

      <nav>
        <button *ngFor="let demo of demos; let i = index" [class.active]="currentDemo === i" (click)="currentDemo = i">
          {{ demo.title }}
        </button>
      </nav>

      <main>
        <ng-container [ngSwitch]="currentDemo">
          <app-quick-start *ngSwitchCase="0"></app-quick-start>
          <app-dashboard-demo *ngSwitchCase="1"></app-dashboard-demo>
          <app-sales-dashboard *ngSwitchCase="2"></app-sales-dashboard>
          <app-events-demo *ngSwitchCase="3"></app-events-demo>
          <app-chart-editor-demo *ngSwitchCase="4"></app-chart-editor-demo>
          <app-custom-chart *ngSwitchCase="5"></app-custom-chart>
        </ng-container>
      </main>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }

      header {
        text-align: center;
        margin-bottom: 30px;
      }

      h1 {
        color: #1976d2;
        margin-bottom: 10px;
      }

      nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
        padding: 20px 0;
        border-bottom: 2px solid #e0e0e0;
      }

      nav button {
        padding: 10px 20px;
        border: 2px solid #1976d2;
        background: white;
        color: #1976d2;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      nav button:hover {
        background: #f3f7fc;
      }

      nav button.active {
        background: #1976d2;
        color: white;
      }

      main {
        margin-top: 20px;
      }

      .sales-chart-demo {
        padding: 20px;
      }

      .sales-chart-demo h2 {
        color: #333;
        margin-bottom: 20px;
      }
    `
  ]
})
export class StandaloneAppComponent {
  currentDemo = 0;

  demos = [
    { title: 'Quick Start', description: 'Basic pie chart example' },
    { title: 'Simple Dashboard', description: 'Dashboard with controls' },
    { title: 'Advanced Dashboard', description: 'Sales dashboard with filters' },
    { title: 'Chart Events', description: 'Interactive event handling' },
    { title: 'Chart Editor', description: 'Built-in chart editing' },
    { title: 'Custom Implementation', description: 'Direct Google Charts API' }
  ];

  // Sample data for the reusable sales chart
  salesData = [
    ['Month', 'Revenue', 'Units'],
    ['Jan', 50000, 120],
    ['Feb', 60000, 140],
    ['Mar', 55000, 130],
    ['Apr', 70000, 160],
    ['May', 65000, 150]
  ];
}
