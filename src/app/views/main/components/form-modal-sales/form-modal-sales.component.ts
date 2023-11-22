import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-sales',
  templateUrl: './form-modal-sales.component.html',
  styleUrls: ['./form-modal-sales.component.css']
})
export class FormModalSalesComponent {

  formSales: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormModalSalesComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    this.formSales = this.fb.group({
      tipoVenta: ['', Validators.required],
      fchVenta: ['', Validators.required],
      valorEstimado: ['', Validators.required],
      isSuministro: [false],
      suministro: [''],
      pesoEstimadoVendido: [''],
      factura: []
    });
  }

  guardar(): void {
    console.log(this.formSales.getRawValue());
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
