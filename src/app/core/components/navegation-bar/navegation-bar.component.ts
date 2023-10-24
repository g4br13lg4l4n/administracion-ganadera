import { Component } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-navegation-bar',
  templateUrl: './navegation-bar.component.html',
  styleUrls: ['./navegation-bar.component.css']
})
export class NavegationBarComponent {
  menu: Menu[] = [
    {
      section: 'Dashboard',
      icon: 'mdi mdi-gauge',
      items: [{ name: 'Visualizador de datos', url: 'main/graphs' }],
      divider: true
    },
    {
      section: 'Gando y suministros',
      icon: 'mdi mdi-table',
      cap: 'Control administrativo',
      items: [
        { name: 'Listado de suministros', url: 'main/suministros' },
        { name: 'Listado de ganados', url: 'main/ganados' },
        { name: 'Historial de ventas', url: 'main/ventas' },
        { name: 'Historial de vacunas', url: 'main/vacunas' },
        { name: 'Catálogo de razas', url: 'main/cat-razas' }
      ],
      divider: true
    },
    {
      section: 'Empleados',
      icon: 'mdi mdi-book-open-variant',
      cap: 'Personal',
      items: [
        { name: 'Listado de empleados', url: 'main/empleados' },
        { name: 'Roles', url: 'main/roles' }
      ],
      divider: true
    },
    {
      section: 'Herramientas de apoyo',
      cap: 'Tools',
      icon: 'mdi mdi-widgets',
      items: [
        { name: 'Calculadora de costos', url: 'main/calculadora' },
        { name: 'Historial de tareas', url: 'main/tareas' },
        { name: 'Notas', url: 'main/notas' }
      ],
    },
  ];
}
