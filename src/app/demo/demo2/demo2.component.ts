import { Component } from '@angular/core';
import { Demo2Facade } from './demo2.facade';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  constructor(public productsFacade: Demo2Facade) {

  }

}
