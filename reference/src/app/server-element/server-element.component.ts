import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None , Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  @ViewChild('heading', {static:true}) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;

  ngOnInit() {
    console.log('Text Content : ' + this.header.nativeElement.textContent);
    console.log('Paragraph Content : ' + this.paragraph.nativeElement.textContent);
    console.log('ngOnInit called!');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
  }
  
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Paragraph Content : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('Text Content : ' + this.header.nativeElement.textContent);
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
