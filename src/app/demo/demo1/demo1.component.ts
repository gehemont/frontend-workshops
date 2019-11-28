import { Component } from '@angular/core';
import { Demo1Facade } from './demo1.facade';
import { DEMO_FACADE } from '../demo';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
  providers: [
    {
      provide: DEMO_FACADE,
      useClass: Demo1Facade
    }]
})
export class Demo1Component {

  constructor(public productsFacade: Demo1Facade) {

  }
}
