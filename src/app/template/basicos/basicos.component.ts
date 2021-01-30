import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('myForm') miformula!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  productoValido(): boolean {
    return (
      this.miformula?.controls?.producto?.invalid &&
      this.miformula?.controls?.producto?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miformula?.controls?.precio?.touched &&
      this.miformula?.controls?.precio?.value < 0
    );
  }

  guardar() {
    console.log(this.miformula.controls.precio);
  }
}
