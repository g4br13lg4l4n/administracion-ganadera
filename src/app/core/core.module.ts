import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TableComponent } from './components/table/table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavegationBarComponent } from './components/navegation-bar/navegation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { CardInfoComponent } from './components/card-info/card-info.component';

/**
 * charts
 */
import { NgChartsModule } from 'ng2-charts';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { WrapperCardComponent } from './components/wrapper-card/wrapper-card.component';

@NgModule({
  declarations: [
    TopBarComponent,
    TableComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    NavegationBarComponent,
    PieChartComponent,
    CardInfoComponent,
    StatsBarComponent,
    WrapperCardComponent
  ],
  exports: [
    TopBarComponent,
    TableComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    NavegationBarComponent,
    PieChartComponent,
    CardInfoComponent,
    StatsBarComponent,
    WrapperCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
})
export class CoreModule {}
