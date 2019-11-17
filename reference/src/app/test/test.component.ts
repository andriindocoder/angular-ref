import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Hello {{ name }}</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Indocoder</h2>
    <h2 [style.color]="highlightColor">Indocoder</h2>
    <h2 [ngStyle]="titleStyles">Indocoder</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Indocoder';
  public hasError = true;
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
