import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-sales',
  templateUrl: './form-modal-sales.component.html',
  styleUrls: ['./form-modal-sales.component.css']
})
export class FormModalSalesComponent {

  constructor(
    public dialogRef: MatDialogRef<FormModalSalesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    console.log('-->', this.data)
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
