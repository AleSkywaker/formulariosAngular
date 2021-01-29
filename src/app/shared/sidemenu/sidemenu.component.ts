import { Component } from '@angular/core';

interface MenuItem {
  titulo: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    { titulo: 'Basicos', ruta: './template/basicos' },
    { titulo: 'Dinamicos', ruta: './template/dinamicos' },
    { titulo: 'Switches', ruta: './template/switches' },
  ];
  reactiveMenu: MenuItem[] = [
    { titulo: 'Basicos', ruta: './reactive/basicos' },
    { titulo: 'Dinamicos', ruta: './reactive/dinamicos' },
    { titulo: 'Switches', ruta: './reactive/switches' },
  ];
}
