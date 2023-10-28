import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-employees',
  templateUrl: './form-modal-employees.component.html',
  styleUrls: ['./form-modal-employees.component.css']
})
export class FormModalEmployeesComponent {

  constructor(
    public dialogRef: MatDialogRef<FormModalEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ){
    console.log('-->', this.data)
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
