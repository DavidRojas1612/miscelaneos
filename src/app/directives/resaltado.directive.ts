import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) { 
    console.log("directiva llamada");
    
  }

  @Input("appResaltado") Colornew: String

  @HostListener('mouseenter') mouseEntro(){
    this.el.nativeElement.style.backgroundColor =this.Colornew;
    console.log("entró");
    
  }

  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor =null;
  }
}
