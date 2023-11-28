import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-employees',
  templateUrl: './form-modal-employees.component.html',
  styleUrls: ['./form-modal-employees.component.css']
})
export class FormModalEmployeesComponent {

  formEmployees: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormModalEmployeesComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    this.formEmployees = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      edad: [],
      fchNacimiento: [],
      telefono: [],
      direccion: [],
      salarioBase: ['', [Validators.required]]
    })
  }

  guardar(): void {
    console.log(this.formEmployees.getRawValue());
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
