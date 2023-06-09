import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

 
constructor(private el:ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
  this.color('lightblue')
}
@HostListener('mouseleave') onMouseLeave(){
  this.color('white')
}
private color(color:string){
  this.el.nativeElement.style.backgroundColor=color;
}

}
