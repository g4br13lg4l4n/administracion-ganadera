import { Component, HostListener, Input, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject, debounceTime } from 'rxjs';
import { DataChart } from '../../models/dataChart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  @Input() dataChart!: DataChart;
  private resizeSubject = new Subject<void>();

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() {
    this.resizeSubject.pipe(debounceTime(1000)).subscribe(() => {
      this.chart?.render();
    });
  }

  // Pie
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (_: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        }
      }
    }
  }

  get chartData(): ChartData {
    return this.dataChart.data;
  }

  get chartType(): ChartType {
    return this.dataChart?.type;
  }
  chartPlugins = [DatalabelsPlugin];

  // Reload chart when is resized the screen
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.resizeSubject.next();
  }
}
