import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class EmployeesModule { }
