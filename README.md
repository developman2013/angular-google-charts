# Angular Google Charts

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/FERNman/angular-google-charts/test-and-build.yml) ![npm](https://img.shields.io/npm/dm/angular-google-charts) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> A wrapper for the [Google Charts library](https://developers.google.com/chart/) written in Angular.

## 🎉 **NEW: Standalone Components Support!**

**Angular Google Charts now supports Angular's modern standalone components architecture!** ✨

- ✅ **Angular 16-20 Compatible**: Full support for Angular versions 16 through 20
- 🚀 **Standalone-First**: Modern development approach with better tree-shaking
- 💛 **Composable**: Write complicated dashboards using all the features provided by `google.charts`

### 🔍 Package Version Compatibility

| Angular Version    | Library Version | Maintenance       | Standalone Components |
| ------------------ | --------------- | ----------------- | --------------------- |
| >= 16.0.0 < 21.0.0 | 16.1.x          | ✅ Active Support | ✅ Available (16.1.x) |
| >= 12.0.0 < 16.0.0 | 12.0.x          | ❌ Not Maintained | ❌ Not Available      |

---

## 🚀 Quick Start (Standalone Components)

### Installation

```bash
npm install angular-google-charts
```

### Setup (Angular 16+)

**1. Bootstrap your app with providers:**

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideGoogleCharts } from 'angular-google-charts';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [provideGoogleCharts()]
});
```

**2. Use components directly in your templates:**

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { GoogleChart, ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-root',
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
  `
})
export class AppComponent {
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
```

### Configuration

Configure Google Charts options globally:

```typescript
// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideGoogleCharts({
      version: '49',
      mapsApiKey: 'your-api-key'
    })
  ]
});
```

## 📊 Available Standalone Components

All components are available as standalone versions:

- **`GoogleChart`** - Main chart component
- **`ChartWrapper`** - 1:1 wrapper for Google's ChartWrapper
- **`Dashboard`** - Dashboard container with controls
- **`ControlWrapper`** - Interactive chart controls
- **`ChartEditor`** - Chart editing interface

### Usage Examples

**Basic Chart:**

```typescript
import { GoogleChart } from 'angular-google-charts';

@Component({
  standalone: true,
  imports: [GoogleChart],
  template: `<google-chart [type]="type" [data]="data"></google-chart>`
})
```

**Dashboard with Controls:**

```typescript
import { Dashboard, ControlWrapper, GoogleChart } from 'angular-google-charts';

@Component({
  standalone: true,
  imports: [Dashboard, ControlWrapper, GoogleChart],
  template: `
    <dashboard [data]="dashboardData" [columns]="dashboardColumns">
      <control-wrapper [for]="myChart" type="CategoryFilter"></control-wrapper>
      <google-chart #myChart type="ColumnChart"></google-chart>
    </dashboard>
  `
})
```

## 📈 Chart Types & Properties

### Supported Chart Types

All Google Charts types are supported. Check the [ChartType file](https://github.com/FERNman/angular-google-charts/blob/master/projects/angular-google-charts/src/lib/types/chart-type.ts) for the complete list or visit the [Google Charts Gallery](https://developers.google.com/chart/interactive/docs/gallery).

### Component Properties

#### Essential Properties

| Property    | Type                   | Description                                             |
| ----------- | ---------------------- | ------------------------------------------------------- |
| `[type]`    | `ChartType`            | **Required.** Chart type (e.g., 'PieChart', 'BarChart') |
| `[data]`    | `any[][]`              | **Required.** Chart data as 2D array                    |
| `[columns]` | `string[] \| object[]` | Column definitions                                      |
| `[options]` | `object`               | Chart-specific options                                  |

#### Optional Properties

| Property          | Type          | Description                  |
| ----------------- | ------------- | ---------------------------- |
| `[title]`         | `string`      | Chart title                  |
| `[width]`         | `number`      | Width in pixels              |
| `[height]`        | `number`      | Height in pixels             |
| `[formatters]`    | `Formatter[]` | Data formatters              |
| `[dynamicResize]` | `boolean`     | Auto-resize on window resize |

### Data Format

```typescript
// Simple data format
myData = [
  ['London', 8136000],
  ['New York', 8538000],
  ['Paris', 2244000],
  ['Berlin', 3470000]
];

// With custom formatting
myData = [
  ['London', { v: 8136000, f: '8.14M' }],
  ['New York', { v: 8538000, f: '8.54M' }]
];
```

### Chart Options

Customize charts with Google Charts options:

```typescript
myOptions = {
  title: 'Population by City',
  colors: ['#e0440e', '#e6693e', '#ec8f6e'],
  is3D: true,
  pieHole: 0.4,
  legend: { position: 'bottom' }
};
```

## 🎛️ Events

All chart events are supported:

```typescript
@Component({
  template: `
    <google-chart
      (ready)="onChartReady($event)"
      (select)="onChartSelect($event)"
      (error)="onChartError($event)"
      (mouseover)="onMouseOver($event)"
      (mouseleave)="onMouseLeave($event)"
    >
    </google-chart>
  `
})
export class MyComponent {
  onChartReady(event: ChartReadyEvent) {
    console.log('Chart ready:', event);
  }

  onChartSelect(event: ChartSelectionChangedEvent) {
    console.log('Selection changed:', event.selection);
  }
}
```

## 🎮 Interactive Dashboards

Create powerful dashboards with multiple charts and controls:

```typescript
@Component({
  standalone: true,
  imports: [Dashboard, ControlWrapper, GoogleChart],
  template: `
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
  `
})
export class SalesDashboard {
  salesData = [
    ['Date', 'Region', 'Sales'],
    [new Date(2024, 0, 1), 'North', 1000],
    [new Date(2024, 0, 2), 'South', 1200]
    // ... more data
  ];
}
```

## 📝 Chart Editor

Enable users to customize charts with the built-in editor:

```typescript
import { Component, ViewChild } from '@angular/core';
import { ChartEditor, GoogleChart } from 'angular-google-charts';

@Component({
  standalone: true,
  imports: [ChartEditor, GoogleChart],
  template: `
    <chart-editor></chart-editor>
    <google-chart #myChart [type]="chartType" [data]="chartData"></google-chart>
    <button (click)="editChart()">Edit Chart</button>
  `
})
export class EditableChart {
  @ViewChild(ChartEditor) editor!: ChartEditor;
  @ViewChild('myChart') chart!: GoogleChart;

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
```

## 🔧 Advanced Usage

### Using ScriptLoaderService

For custom implementations:

```typescript
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'angular-google-charts';

@Component({
  standalone: true,
  template: `<div #chartContainer></div>`
})
export class CustomChart implements OnInit {
  @ViewChild('chartContainer', { static: true })
  container!: ElementRef;

  constructor(private loader: ScriptLoaderService) {}

  ngOnInit() {
    this.loader.loadChartPackages('corechart').subscribe(() => {
      const chart = new google.visualization.PieChart(this.container.nativeElement);
      chart.draw(this.createDataTable(), this.getOptions());
    });
  }
}
```

### Custom Chart Components

Create reusable chart components:

```typescript
import { Component, Input } from '@angular/core';
import { GoogleChart } from 'angular-google-charts';

@Component({
  selector: 'sales-chart',
  standalone: true,
  imports: [GoogleChart],
  template: `
    <google-chart type="ComboChart" [data]="processedData" [options]="chartOptions" [width]="width" [height]="height">
    </google-chart>
  `
})
export class SalesChart {
  @Input() salesData: any[] = [];
  @Input() width = 600;
  @Input() height = 400;

  get processedData() {
    // Transform your data here
    return this.salesData;
  }

  get chartOptions() {
    return {
      title: 'Sales Performance',
      vAxes: {
        0: { title: 'Revenue ($)' },
        1: { title: 'Units Sold' }
      },
      series: {
        0: { type: 'columns', targetAxisIndex: 0 },
        1: { type: 'line', targetAxisIndex: 1 }
      }
    };
  }
}
```

## ⚡ Performance Optimization

### Preloading Scripts

For faster initial chart rendering, add to your `index.html`:

```html
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" async></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/49/loader.js" async></script>
```

### Dynamic Imports

Load charts only when needed:

```typescript
async loadChart() {
  const { GoogleChart } = await import('angular-google-charts');
  // Use the component dynamically
}
```

## 🔄 Migration from NgModules

Still using NgModules? No problem! Your existing code continues to work:

```typescript
// ✅ This still works!
@NgModule({
  imports: [GoogleChartsModule.forRoot()]
})
export class AppModule {}
```

To migrate to standalone components:

1. **Replace imports:**

   ```typescript
   // Before
   import { GoogleChartsModule } from 'angular-google-charts';

   // After
   import { GoogleChart, provideGoogleCharts } from 'angular-google-charts';
   ```

2. **Update bootstrap:**

   ```typescript
   // Before
   platformBrowserDynamic().bootstrapModule(AppModule);

   // After
   bootstrapApplication(AppComponent, {
     providers: [provideGoogleCharts()]
   });
   ```

3. **Update components:**
   ```typescript
   @Component({
     standalone: true,
     imports: [GoogleChart], // Add specific imports
     // ... rest of component
   })
   ```

## 🔧 Configuration Options

### Global Configuration

```typescript
provideGoogleCharts({
  version: '49', // Google Charts version
  mapsApiKey: 'API_KEY', // For GeoChart and Maps
  safeMode: true // Enable safe mode (Charts 47+)
});
```

### Lazy Configuration

For dynamic configuration:

```typescript
// service
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private configSubject = new ReplaySubject<GoogleChartsConfig>(1);
  config$ = this.configSubject.asObservable();

  updateConfig(config: GoogleChartsConfig) {
    this.configSubject.next(config);
  }
}

// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: GOOGLE_CHARTS_LAZY_CONFIG,
      useFactory: (service: ConfigService) => service.config$,
      deps: [ConfigService]
    }
  ]
});
```

---

## 📚 Traditional NgModule Usage

> **Note:** While NgModule usage is still supported, we recommend using standalone components for new projects.

<details>
<summary>Click to see NgModule documentation</summary>

### NgModule Setup

```typescript
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [
    GoogleChartsModule,
    // or with configuration
    GoogleChartsModule.forRoot({ version: '49' })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Using forRoot Configuration

```typescript
GoogleChartsModule.forRoot({
  version: 'chart-version',
  mapsApiKey: 'your-api-key'
});
```

### Lazy Loading Configuration

#### Option 1: Service-based

```typescript
@Injectable()
export class GoogleChartsConfigService {
  private configSubject = new ReplaySubject<GoogleChartsConfig>(1);
  readonly config$ = this.configSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadLazyConfigValues(): void {
    this.http
      .post('https://api.example.com/config', {})
      .pipe(take(1))
      .subscribe(config => this.configSubject.next(config));
  }
}

export function googleChartsConfigFactory(configService: GoogleChartsConfigService): Observable<GoogleChartsConfig> {
  return configService.config$;
}

@NgModule({
  providers: [
    GoogleChartsConfigService,
    {
      provide: GOOGLE_CHARTS_LAZY_CONFIG,
      useFactory: googleChartsConfigFactory,
      deps: [GoogleChartsConfigService]
    }
  ]
})
export class AppModule {}
```

#### Option 2: Global Subject

```typescript
export const googleChartsConfigSubject = new ReplaySubject<GoogleChartsConfig>(1);

// Call this from anywhere
googleChartsConfigSubject.next(config);

@NgModule({
  providers: [
    {
      provide: GOOGLE_CHARTS_LAZY_CONFIG,
      useValue: googleChartsConfigSubject.asObservable()
    }
  ]
})
export class AppModule {}
```

**Important Notes:**

- You can use `forRoot()` **OR** `GOOGLE_CHARTS_LAZY_CONFIG`, not both
- Lazy-loaded configs delay chart rendering until config is available

</details>

---

## 📄 License

This project is provided under the [MIT license](https://github.com/FERNman/angular-google-charts/blob/master/LICENSE.md).

## 🤝 Contributing

We welcome contributions!

## 📞 Support

- 📖 [Documentation](https://developers.google.com/chart/)
- 🐛 [Issues](https://github.com/FERNman/angular-google-charts/issues)

---

**⭐ Like this project? Give it a star on GitHub!**
