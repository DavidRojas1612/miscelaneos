import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container main-container">
  <h1>Demos <small>angular</small></h1>
  <hr>
    <p [appResaltado]="'orange'">hola mundo resaltado</p>
  <hr>
<strong> <h3>ngstyle</h3></strong>
  <app-ng-style></app-ng-style>
  <hr>
 <strong> <h3>css one component</h3></strong>
  <app-cp-css></app-cp-css>
  <hr>
<strong><h3>ngClass</h3></strong>
  <app-clases></app-clases>
  <hr>

 <strong><h3>ngSwitch</h3></strong> 
 <app-ng-switch></app-ng-switch>
  <!-- <p> hola mundo desde app.component</p> -->
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
