import { Component } from '@angular/core';
import { Demo3Facade } from './demo3.facade';
import { DEMO_FACADE } from '../demo';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss'],
  providers: [
    Demo3Facade,
    {
      provide: DEMO_FACADE,
      useClass: Demo3Facade
    }]
})
export class Demo3Component {

  constructor(public productsFacade: Demo3Facade) {

  }
}
