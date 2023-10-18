import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { EmployeesModule } from './pages/employees/employees.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    LayoutsModule,
    EmployeesModule
  ],
})
export class MainModule {}
