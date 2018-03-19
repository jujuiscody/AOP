import { Directive, TemplateRef, ViewContainerRef, Input, AfterContentInit } from '@angular/core';
import { TemplateAstPath } from '@angular/compiler';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements AfterContentInit{


  private time:number;
  private factor:number;

  constructor(private tref:TemplateRef<any>, private vcRef:ViewContainerRef) {    
   }
   /*
   @Input()
   set appDelay(time){
    setTimeout(()=>{this.vcRef.createEmbeddedView(this.tref);},time)
   }
*/
   @Input()
   set appDelay(time:number){
     this.time = time;
   }

   @Input()
   set appDelayFactor(factor:number){
     this.factor = factor;
   }

   ngAfterContentInit(){
     setTimeout(()=>{this.vcRef.createEmbeddedView(this.tref);},(this.time * this.factor))
   }

}
