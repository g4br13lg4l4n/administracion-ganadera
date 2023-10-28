import { Component } from '@angular/core';
import { FormModalCattleComponent } from '../../../components/form-modal-cattle/form-modal-cattle.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cattle',
  templateUrl: './cattle.component.html',
  styleUrls: ['./cattle.component.css']
})
export class CattleComponent {
  columnsTable = ['ID', 'Número de registro', 'Tipo de animal', 'Raza', 'Fecha nacimiento', 'Estatus', 'Valor estimado', 'Rancho asignado', 'Opciones'];

  constructor(public dialog: MatDialog) {}

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(FormModalCattleComponent, {
      data: {
        option
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
