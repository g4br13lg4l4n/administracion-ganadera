import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalSalesComponent } from '../../../components/form-modal-sales/form-modal-sales.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  columnsTable = ['ID', 'Tipo venta', 'Fecha venta', 'Valor de venta', 'Peso estimado vendido', 'Opciones'];

  constructor(public dialog: MatDialog) {}

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FormModalSalesComponent, {
      data: {
        option
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
