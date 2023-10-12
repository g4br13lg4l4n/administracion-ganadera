import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [CommonModule, CoreModule],
})
export class ModuleModule {}
