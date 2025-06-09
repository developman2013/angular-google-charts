// Custom Chart Example - from documentation
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'angular-google-charts';

declare let google: unknown;

@Component({
  selector: 'app-custom-chart',
  standalone: true,
  template: `
    <h2>Custom Chart Implementation</h2>
    <div #chartContainer></div>
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
      div {
        width: 500px;
        height: 400px;
      }
    `
  ]
})
export class CustomChartComponent implements OnInit {
  @ViewChild('chartContainer', { static: true })
  container!: ElementRef;

  constructor(private loader: ScriptLoaderService) {}

  ngOnInit() {
    this.loader.loadChartPackages('corechart').subscribe(() => {
      const chart = new google.visualization.PieChart(this.container.nativeElement);
      chart.draw(this.createDataTable(), this.getOptions());
    });
  }

  private createDataTable() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'Hours per Day');

    data.addRows([
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    return data;
  }

  private getOptions() {
    return {
      title: 'My Daily Activities (Custom Implementation)',
      pieHole: 0.4,
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
    };
  }
}
