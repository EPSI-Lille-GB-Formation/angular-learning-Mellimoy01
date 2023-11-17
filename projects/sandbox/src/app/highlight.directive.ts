import { Directive, ElementRef,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) { }
  
  @HostBinding('style.backgroundColor')
  bgColor = "transaprent"

  @HostListener('mouseenter')
  onMouseEnter(){
    this.bgColor = "yellow";
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.bgColor = "transparent";
  }
}

