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
      items: [{ name: 'Visualizador de datos', url: 'graficos' }],
      divider: true
    },
    {
      section: 'Gando y suministros',
      icon: 'mdi mdi-table',
      cap: 'Control administrativo',
      items: [
        { name: 'Listado de suministros', url: 'suministros' },
        { name: 'Listado de ganados', url: 'ganados' },
        { name: 'Historial de ventas', url: 'ventas' },
        { name: 'Historial de vacunas', url: 'vacunas' },
        { name: 'Catálogo de razas', url: 'cat-razas' }
      ],
      divider: true
    },
    {
      section: 'Empleados',
      icon: 'mdi mdi-book-open-variant',
      cap: 'Personal',
      items: [
        { name: 'Listado de empleados', url: 'empleados' },
        { name: 'Roles', url: 'roles' }
      ],
      divider: true
    },
    {
      section: 'Herramientas de apoyo',
      cap: 'Tools',
      icon: 'mdi mdi-widgets',
      items: [
        { name: 'Calculadora de costos', url: 'calculadora' },
        { name: 'Historial de tareas', url: 'tareas' },
        { name: 'Notas', url: 'notas' }
      ],
    },
  ];
}
