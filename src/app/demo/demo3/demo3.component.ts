import { Component } from '@angular/core';
import { Demo3Facade } from './demo3.facade';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
  constructor(public productsFacade: Demo3Facade) {

  }
}
