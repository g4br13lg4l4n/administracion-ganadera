import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'employees',
        loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule),
        data: {
          title: 'Empleados',
          menu: [
            {
              name: 'Empleados',
              url: 'employees',
            },
            {
              name: 'Admin roles',
              url: 'employees_roles',
            },
          ],
        },
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
