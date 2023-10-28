import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalVaccinesComponent } from '../../../components/form-modal-vaccines/form-modal-vaccines.component';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css']
})
export class VaccinesComponent {
  columnsTable = ['ID', 'Nombre vacuna', 'Fecha aplicación', 'Motivo aplicación', 'Opciones'];

  constructor(public dialog: MatDialog) {}

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FormModalVaccinesComponent, {
      data: {
        option
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
