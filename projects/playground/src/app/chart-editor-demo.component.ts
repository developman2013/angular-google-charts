// Chart Editor Example - from documentation
import { Component, ViewChild } from '@angular/core';
import { ChartEditor, GoogleChart } from 'angular-google-charts';

@Component({
  selector: 'app-chart-editor-demo',
  standalone: true,
  imports: [ChartEditor, GoogleChart],
  template: `
    <h2>Chart Editor Demo</h2>
    <chart-editor></chart-editor>
    <google-chart #myChart [type]="chartType" [data]="chartData"></google-chart>
    <button (click)="editChart()">Edit Chart</button>
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
      button {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #1565c0;
      }
    `
  ]
})
export class ChartEditorDemoComponent {
  @ViewChild(ChartEditor) editor!: ChartEditor;
  @ViewChild('myChart') chart!: GoogleChart;

  chartType = 'PieChart';
  chartColumns = ['Category', 'Value'];
  chartData = [
    ['Red', 10],
    ['Blue', 20],
    ['Green', 15],
    ['Yellow', 25]
  ];

  editChart() {
    this.editor
      .editChart(this.chart)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          console.log('Chart updated!');
        }
      });
  }
}
