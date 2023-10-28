import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalEmployeesComponent } from '../../../components/form-modal-employees/form-modal-employees.component';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {
  headTable1: string[] = ['Nombre', 'Apellidos', 'Edad', 'Fecha de nacimiento', 'Teléfono', 'Dirección', 'Salario base']

  constructor(public dialog: MatDialog) {}

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FormModalEmployeesComponent, {
      data: {
        option
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
