import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Hello {{ name }}</h2>
    <input [disabled]="isDisabled" [id]="myId" type="text" value="Indocoder" />
    <input [disabled]="!isDisabled" id="{{myId}}" type="text" value="Indocoder" />
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Indocoder" />
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = 'Indocoder';
  public myId = 'testId';
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
