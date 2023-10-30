import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOptions } from 'src/app/core/models/dialogOptions';

@Component({
  selector: 'app-form-modal-cattle',
  templateUrl: './form-modal-cattle.component.html',
  styleUrls: ['./form-modal-cattle.component.css']
})
export class FormModalCattleComponent {
  constructor(
    public dialogRef: MatDialogRef<FormModalCattleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptions
  ){
    console.log('-->', this.data)
  }

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
