import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  //public counter : Number = 0;
  counter: number = 100;

  constructor() {
    // this.counter++;
    // console.log('Creando el componente del contador');
  }

  incrementBy(value: number = 1): void {
    this.counter += value;
  }

  //para declarar funciones es como el de arriba
  // void increment(){

  // }
}
