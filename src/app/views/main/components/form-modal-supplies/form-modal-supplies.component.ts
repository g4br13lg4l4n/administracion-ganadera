import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-supplies',
  templateUrl: './form-modal-supplies.component.html',
  styleUrls: ['./form-modal-supplies.component.css']
})
export class FormModalSuppliesComponent {

  formSupplies: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormModalSuppliesComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    this.formSupplies = this.fb.group({
      nombreSuministro: ['', Validators.required],
      tipoSuministro: ['', Validators.required],
      valorSuministro: ['', Validators.required],
      cantidad: ['', Validators.required],
      fchCompra: [],
      fchCaducidad: [],
      estatus: ['', Validators.required],
      motivoBaja: [],
      fchBaja: [],
      factura: []
    })
  }

  guardar(): void {
    console.log(this.formSupplies.getRawValue());
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
