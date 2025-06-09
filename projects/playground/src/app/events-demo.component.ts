import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChart, ChartReadyEvent, ChartSelectionChangedEvent } from 'angular-google-charts';

@Component({
  selector: 'app-events-demo',
  standalone: true,
  imports: [GoogleChart, CommonModule],
  template: `
    <h2>Chart Events Demo</h2>
    <google-chart
      [type]="chartType"
      [data]="chartData"
      [options]="chartOptions"
      (ready)="onChartReady($event)"
      (select)="onChartSelect($event)"
      (error)="onChartError($event)"
      (mouseover)="onMouseOver($event)"
      (mouseleave)="onMouseLeave()"
    >
    </google-chart>

    <div class="event-log">
      <h3>Event Log:</h3>
      <ul>
        <li *ngFor="let event of events">{{ event }}</li>
      </ul>
    </div>
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
      .event-log {
        margin-top: 20px;
        padding: 15px;
        background-color: #f5f5f5;
        border-radius: 4px;
      }
      .event-log h3 {
        margin-top: 0;
      }
      .event-log ul {
        max-height: 200px;
        overflow-y: auto;
      }
    `
  ]
})
export class EventsDemoComponent {
  chartType = 'PieChart';
  chartData = [
    ['Apples', 30],
    ['Bananas', 25],
    ['Oranges', 20],
    ['Grapes', 25]
  ];

  chartOptions = {
    title: 'Fruit Distribution',
    pieHole: 0.4
  };

  events: string[] = [];

  onChartReady(event: ChartReadyEvent) {
    this.addEvent('Chart ready');
    console.log('Chart ready:', event);
  }

  onChartSelect(event: ChartSelectionChangedEvent) {
    this.addEvent(`Selection changed: ${JSON.stringify(event.selection)}`);
    console.log('Selection changed:', event.selection);
  }

  onChartError(event: { message: string }) {
    this.addEvent(`Chart error: ${event.message}`);
    console.error('Chart error:', event);
  }

  onMouseOver(event: { row?: number; column?: number }) {
    this.addEvent(`Mouse over: row ${event.row}, column ${event.column}`);
  }

  onMouseLeave() {
    this.addEvent('Mouse leave');
  }

  private addEvent(message: string) {
    this.events.unshift(`${new Date().toLocaleTimeString()}: ${message}`);
    if (this.events.length > 10) {
      this.events.pop();
    }
  }
}
