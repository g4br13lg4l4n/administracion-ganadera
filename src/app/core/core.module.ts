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

@NgModule({
  declarations: [
    TopBarComponent,
    TableComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    NavegationBarComponent,
  ],
  exports: [
    TopBarComponent,
    TableComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    NavegationBarComponent,
    RouterModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
})
export class CoreModule {}
