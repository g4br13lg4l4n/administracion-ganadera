import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal-breeds',
  templateUrl: './form-modal-breeds.component.html',
  styleUrls: ['./form-modal-breeds.component.css']
})
export class FormModalBreedsComponent {

  constructor(
    public dialogRef: MatDialogRef<FormModalBreedsComponent>,
  ){}

  close(): void {
    this.dialogRef.close('enviar algo');
  }
}
