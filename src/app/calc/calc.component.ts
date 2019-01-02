import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// tslint:disable-next-line:no-var-requires
const image = require('../../assets/its_something.png');

@Component({
  selector: 'app-calc',
  template: `
    <p
      class="a-default-class"
      [ngClass]="{
        'a-class': hasAClass
      }"
    >
      calc works!
      {{prop1}}
      another text node
      {{image}}
    </p>
  `,
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  @Input() hasAClass = false;
  prop1: number;
  image: string;
  observable$: Observable<string>;

  constructor() {
    this.init();
    this.prop1 = 1337;
    this.image = image;
  }

  ngOnInit() {
  }

  init() {
    return 'Imma method';
  }
}
