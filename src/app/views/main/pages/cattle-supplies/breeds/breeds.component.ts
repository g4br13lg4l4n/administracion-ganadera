import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormModalBreedsComponent } from '../../../components/form-modal-breeds/form-modal-breeds.component';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent {
  columnsTable = ['ID', 'Nombre de la Raza', 'Origen']; // AGREGAR IMAGEN A LADO DEL NOMBRE

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormModalBreedsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
