import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroung]'
})
export class BackgroungDirective {

  constructor(private element:ElementRef) { }

  @Input() appBackgroung:string = 'white'
  @Input() textColor:string = 'black'


  @HostListener('mouseenter')
  mouseEnter(){
    this.element.nativeElement.style.backgroundColor = this.appBackgroung
    this.element.nativeElement.style.color = this.textColor
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'white'
    this.element.nativeElement.style.color = 'black'
  }

}
