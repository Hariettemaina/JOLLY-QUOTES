import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  
  
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.background = "rgb(255, 0, 255)";
  }

}
