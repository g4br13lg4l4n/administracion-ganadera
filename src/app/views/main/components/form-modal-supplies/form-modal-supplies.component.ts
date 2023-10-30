import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-supplies',
  templateUrl: './form-modal-supplies.component.html',
  styleUrls: ['./form-modal-supplies.component.css']
})
export class FormModalSuppliesComponent {
  constructor(
    public dialogRef: MatDialogRef<FormModalSuppliesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ){
    console.log('-->', this.data)
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
