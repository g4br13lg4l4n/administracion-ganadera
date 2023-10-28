import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalRolComponent } from '../../../components/form-modal-rol/form-modal-rol.component';

@Component({
  selector: 'app-rols',
  templateUrl: './rols.component.html',
  styleUrls: ['./rols.component.css']
})
export class RolsComponent {
  columnsTable = ['ID', 'Nombre de la Raza', 'Origen'];

  constructor(public dialog: MatDialog) {}

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FormModalRolComponent, {
      data: {
        option
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
