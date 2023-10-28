import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { PagesModule } from './pages/pages.module';
import { FormModalBreedsComponent } from './components/form-modal-breeds/form-modal-breeds.component';
import { FormModalEmployeesComponent } from './components/form-modal-employees/form-modal-employees.component';
import { FormModalCattleComponent } from './components/form-modal-cattle/form-modal-cattle.component';
import { FormModalSalesComponent } from './components/form-modal-sales/form-modal-sales.component';
import { FormModalSuppliesComponent } from './components/form-modal-supplies/form-modal-supplies.component';
import { FormModalVaccinesComponent } from './components/form-modal-vaccines/form-modal-vaccines.component';
import { FormModalRolComponent } from './components/form-modal-rol/form-modal-rol.component';


@NgModule({
  declarations: [
    MainComponent,
    FormModalBreedsComponent,
    FormModalEmployeesComponent,
    FormModalCattleComponent,
    FormModalSalesComponent,
    FormModalSuppliesComponent,
    FormModalVaccinesComponent,
    FormModalRolComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    LayoutsModule,
    PagesModule
  ],
})
export class MainModule {}
