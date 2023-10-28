import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';


@Component({
  selector: 'app-form-modal-breeds',
  templateUrl: './form-modal-breeds.component.html',
  styleUrls: ['./form-modal-breeds.component.css']
})
export class FormModalBreedsComponent {

  constructor(
    public dialogRef: MatDialogRef<FormModalBreedsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ){
    console.log('-->', this.data)
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
