import { Component } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {
  headTable1: string[] = ['Nombre', 'Apellidos', 'Edad', 'Fecha de nacimiento', 'Teléfono', 'Dirección', 'Salario base']

}
