import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
@Directive({ selector: '[myHidden]' })
// Directive class
export class FirstDirectiveDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        
     // Use renderer to render the element with styles
       renderer.setElementStyle(el.nativeElement, 'background-color', 'yellow');
    }
}