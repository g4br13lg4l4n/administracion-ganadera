import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';


@Component({
  selector: 'app-form-modal-breeds',
  templateUrl: './form-modal-breeds.component.html',
  styleUrls: ['./form-modal-breeds.component.css']
})
export class FormModalBreedsComponent {

  formBreeds: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormModalBreedsComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ) {
    this.formBreeds = this.fb.group({
      nombreRaza: ['', Validators.required],
      origenRaza: ['', Validators.required],
      razaImagen: ['']
    })
  }

  guardar(): void {
    console.log(this.formBreeds.getRawValue());
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
