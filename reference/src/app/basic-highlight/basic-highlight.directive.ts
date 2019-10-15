import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'darkCyan';
        this.elementRef.nativeElement.style.color = 'white';
    }
}