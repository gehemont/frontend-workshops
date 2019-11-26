import { Component } from '@angular/core';
import { Demo3Facade } from '../demo3/demo3.facade';
import { Demo1Facade } from './demo1.facade';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
  providers: [
    {
      provide: Demo3Facade,
      useClass: Demo1Facade
    }
  ]
})
export class Demo1Component {

}
