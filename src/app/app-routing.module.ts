import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './views/main/pages/employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
