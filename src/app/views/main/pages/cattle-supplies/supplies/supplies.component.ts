import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalSuppliesComponent } from '../../../components/form-modal-supplies/form-modal-supplies.component';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent {
  columnsTable = ['ID', 'Nombre del suministro', 'Tipo suministro', 'Valor estimado', 'Cantidad', 'Fecha de compra', 'Fecha de caducidad', 'Estatus', 'Opciones'];

  constructor(public dialog: MatDialog) {}

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FormModalSuppliesComponent, {
      data: {
        option
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
