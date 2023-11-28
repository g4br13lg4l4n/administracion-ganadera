import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-cattle',
  templateUrl: './form-modal-cattle.component.html',
  styleUrls: ['./form-modal-cattle.component.css']
})
export class FormModalCattleComponent {

  formCattle: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormModalCattleComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ){
    this.formCattle = this.fb.group({
      tipoAnimal: ['', Validators.required],
      raza: ['', Validators.required],
      genero: ['', Validators.required],
      cantidad: ['', Validators.required],
      fchNacimiento: [''],
      registroVacuna: [''],
      numRegistro: [''],
      estatus: [''],
      fchBaja: [''],
      valorEstimado: [''],
      pesoEstimado: [''],
      rancho: [''],
      notas: [''],
      fchIngreso: [''],
      emberazada: [''],
      foto: ['']
    })
  }

  guardar(): void {
    console.log(this.formCattle.getRawValue());
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
