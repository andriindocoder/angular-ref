import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Hello {{ name }}</h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Indocoder';
  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  logMessage(myInput) {
    alert(myInput.value);
  }

}
