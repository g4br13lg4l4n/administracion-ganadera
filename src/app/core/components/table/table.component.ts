import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input({ required: true }) headTable!: string[];

  ELEMENT_DATA1: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ]

  ELEMENT_DATA2: any[] = [
    {position: 1, name: '', weight: 1.0079, symbol: 'H'},
    {position: 2, name: '', weight: 4.0026, symbol: 'He'},
    {position: 3, name: '', weight: 6.941, symbol: 'Li'},
    {position: 4, name: '', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: '', weight: 10.811, symbol: 'B'},
    {position: 6, name: '', weight: 12.0107, symbol: 'C'},
    {position: 7, name: '', weight: 14.0067, symbol: 'N'},
    {position: 8, name: '', weight: 15.9994, symbol: 'O'},
    {position: 9, name: '', weight: 18.9984, symbol: 'F'},
    {position: 10, name: '', weight: 20.1797, symbol: 'Ne'},
  ]

  constructor() {

  }
}
