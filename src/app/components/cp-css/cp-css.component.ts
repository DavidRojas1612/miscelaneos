import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp-css',
  template: `
    <p>
      cp-css works!
    </p>
  `,
  styles: [`p{ color:red;
              font-size: 20px
            }`]
})
export class CpCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
