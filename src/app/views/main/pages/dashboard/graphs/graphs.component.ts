import { Component } from '@angular/core';
import { DataChart } from '../../../../../core/models/dataChart';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
})
export class GraphsComponent {
  dataChart!: DataChart;
  dataChartLine!: DataChart;
  dataChartPolar!: DataChart;

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
          }
        ]
      }
    }

    this.dataChartLine = {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            data: [20, 40, 100, 23, 34, 56, 23, 56, 23, 45, 65, 45],
            label: 'Ventas',
            fill: 'origin'
          },
          {
            data: [10, 50, 30, 34, 56, 66, 45, 87, 23, 98, 34, 0],
            label: 'Compras',
            fill: 'origin'
          }
        ]
      }
    }

    this.dataChartPolar = {
      type: 'polarArea',
      data: {
        labels: ['Protrero Rancho Nuevo', 'Potrero Pochitocal', 'Potrero Tacoctalpa'],
        datasets: [
          {
            data: [120, 98, 145]
          }
        ]
      }
    }
  }

  /**
   * Set value of cards datas
   */



  /**
   * Return list of porcent in chart "GANADO"
   */
  get porcentOfData(): any {
    const values = this.dataChart?.data?.datasets[0]?.data || [];
    const sumaTotal = values.reduce((acumulador, valor) => Number(acumulador) + Number(valor), 0);
    return values.map(valor => (Number(valor) / Number(sumaTotal)) * 100);
  }
}
