import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RolsComponent } from './employees/rols/rols.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';
import { SuppliesComponent } from './cattle-supplies/supplies/supplies.component';
import { CattleComponent } from './cattle-supplies/cattle/cattle.component';
import { SalesComponent } from './cattle-supplies/sales/sales.component';
import { VaccinesComponent } from './cattle-supplies/vaccines/vaccines.component';
import { BreedsComponent } from './cattle-supplies/breeds/breeds.component';
import { CostsCalcComponent } from './tools/costs-calc/costs-calc.component';
import { HistoryTasksComponent } from './tools/history-tasks/history-tasks.component';



@NgModule({
  declarations: [
    RolsComponent,
    ListEmployeesComponent,
    GraphsComponent,
    SuppliesComponent,
    CattleComponent,
    SalesComponent,
    VaccinesComponent,
    BreedsComponent,
    CostsCalcComponent,
    HistoryTasksComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    CoreModule
  ]
})
export class PagesModule { }
