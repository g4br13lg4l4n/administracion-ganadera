import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { BreedsComponent } from './cattle-supplies/breeds/breeds.component';
import { CattleComponent } from './cattle-supplies/cattle/cattle.component';
import { SalesComponent } from './cattle-supplies/sales/sales.component';
import { SuppliesComponent } from './cattle-supplies/supplies/supplies.component';
import { VaccinesComponent } from './cattle-supplies/vaccines/vaccines.component';
import { RolsComponent } from './employees/rols/rols.component';
import { CostsCalcComponent } from './tools/costs-calc/costs-calc.component';
import { HistoryTasksComponent } from './tools/history-tasks/history-tasks.component';
import { NotesComponent } from './tools/notes/notes.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';

const routes: Routes = [
  {
    path: 'graphs',
    component: GraphsComponent
  },
  {
    path: 'cat-razas',
    component: BreedsComponent
  },
  {
    path: 'ganados',
    component: CattleComponent,
  },
  {
    path: 'ventas',
    component: SalesComponent
  },
  {
    path: 'suministros',
    component: SuppliesComponent
  },
  {
    path: 'vacunas',
    component: VaccinesComponent
  },
  {
    path: 'empleados',
    component: ListEmployeesComponent
  },
  {
    path: 'roles',
    component: RolsComponent
  },
  {
    path: 'calculadora',
    component: CostsCalcComponent
  },
  {
    path: 'tareas',
    component: HistoryTasksComponent
  },
  {
    path: 'notas',
    component: NotesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
