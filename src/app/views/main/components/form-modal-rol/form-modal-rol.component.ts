import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormModalEmployeesComponent } from '../form-modal-employees/form-modal-employees.component';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-rol',
  templateUrl: './form-modal-rol.component.html',
  styleUrls: ['./form-modal-rol.component.css']
})
export class FormModalRolComponent {
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
