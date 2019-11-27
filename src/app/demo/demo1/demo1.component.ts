import { Component } from '@angular/core';
import { Demo1Facade } from './demo1.facade';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {

  constructor(public productsFacade: Demo1Facade) {

  }
}
