import { Component } from '@angular/core';
import { DataChart } from '../../../../../core/models/dataChart';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
})
export class GraphsComponent {
  dataChart!: DataChart;

  constructor() {
    this.setValueToChart();

  }

  setValueToChart(): void {
    this.dataChart = {
      type: 'pie',
      data: {
        labels: ['Vacas', 'Toros', 'Becerros'],
        datasets: [
          {
            data: [20, 40, 100]
          },
        ],
      },
    };
  }
}
