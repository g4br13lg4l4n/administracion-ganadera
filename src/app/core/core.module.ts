import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TableComponent } from './components/table/table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavegationBarComponent } from './components/navegation-bar/navegation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    TopBarComponent,
    TableComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    NavegationBarComponent
  ],
  exports: [
    TopBarComponent,
    TableComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    NavegationBarComponent
  ],
  imports: [CommonModule],
})
export class CoreModule {}
