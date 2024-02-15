import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective {
  @Input() defaultColor:string='white'
  @Input() directiveColor:string='blue'
  constructor(public elRef:ElementRef) { 
  }
  @HostListener('click') onClick(){
    this.elRef.nativeElement.style.border=`2px solid ${this.directiveColor}`
  }
  @HostListener('mouseout') onMouseOut(){
    this.elRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  }
}
