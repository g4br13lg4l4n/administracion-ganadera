import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-vaccines',
  templateUrl: './form-modal-vaccines.component.html',
  styleUrls: ['./form-modal-vaccines.component.css']
})
export class FormModalVaccinesComponent {

  formVaccines: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormModalVaccinesComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    this.formVaccines = this.fb.group({
      vacunaNombre: ['', Validators.required],
      fchAplicacion: ['', Validators.required],
      motivoAplicacion: ['']
    });
  }

  guardar(): void {
    console.log(this.formVaccines.getRawValue());
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
