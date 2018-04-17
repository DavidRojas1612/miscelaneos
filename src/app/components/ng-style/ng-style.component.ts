import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
     hola mundo... esta es una etiqueta
      <br>
    </p>

     <button class="btn btn-info" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i> 
     </button>

     <button class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i> 
     </button>
     

     <p [ngStyle]="{'font-size': '40px', 'color':'red'}">
       prueba ngStyle con arreglo...
      <br>
    </p>
     
    
  
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano:number = 30;
  constructor() { }

  ngOnInit() {
  }

}
