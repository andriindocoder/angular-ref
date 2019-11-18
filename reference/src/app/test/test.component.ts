import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="displayName; then thenBlock; else elseBlock">Indocoder</div>

    <ng-template #thenBlock>
      <h2>Indocoder</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  displayName = false;

  constructor() { }

  ngOnInit() {
  }

}
