import { Component } from '@angular/core';
import { Demo2Facade } from './demo2.facade';
import { DEMO_FACADE } from '../demo';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  providers: [
    Demo2Facade,
    {
      provide: DEMO_FACADE,
      useClass: Demo2Facade
    }]
})
export class Demo2Component {

  constructor(public productsFacade: Demo2Facade) {

  }
}
