import {Directive, ElementRef,OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'

})
export class HighlightDirective implements OnInit {
  @Input() numberOfHighlight =0;
  
  constructor(private elem: ElementRef) {
    
   }
   ngOnInit() {
     this.elem.nativeElement.style.backgroundColor = 'greenyellow'

   }
}
