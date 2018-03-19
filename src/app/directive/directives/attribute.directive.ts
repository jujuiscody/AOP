import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private applied:ElementRef) {

      (<HTMLDivElement>this.applied.nativeElement).style.fontSize = "300%";
   }

   @Input()
   basicColor:string = 'red';


   @HostBinding('style.color')
   get color(){
     return this.basicColor;
   }

   @HostListener('mouseenter',['$Event'])
   onMouseEnter(event){
     (<HTMLElement>this.applied.nativeElement).style.fontSize ="200%";
     console.log(this.applied.nativeElement.fontSize);
   }

   @HostListener('mouseleave')
   onMouseLeave(){
     (<HTMLElement>this.applied.nativeElement).style.fontSize ="300%";
   }

}
