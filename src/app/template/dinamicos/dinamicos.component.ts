import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Favorito {
  id: number;
  nombre: string;
}
interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miForm!: NgForm;
  nuevoJuego: string;
  persona: Persona = {
    nombre: 'Alex',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Ghost Recom' },
    ],
  };
  save() {
    console.log('save....');
  }
  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar(i: number) {
    console.log(i);
    this.persona.favoritos.splice(i, 1);
  }
}
