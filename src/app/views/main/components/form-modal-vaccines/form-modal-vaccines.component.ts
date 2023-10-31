import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-vaccines',
  templateUrl: './form-modal-vaccines.component.html',
  styleUrls: ['./form-modal-vaccines.component.css']
})
export class FormModalVaccinesComponent {
  constructor(
    public dialogRef: MatDialogRef<FormModalVaccinesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    console.log('-->', this.data)
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
