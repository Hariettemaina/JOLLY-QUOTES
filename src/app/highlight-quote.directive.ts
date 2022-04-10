import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.background = "rgb(255, 0, 255)";
  
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

}
}
