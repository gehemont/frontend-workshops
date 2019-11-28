import { Component, OnDestroy } from '@angular/core';
import { Demo3Facade } from './demo3.facade';
import { DEMO_FACADE } from '../demo';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss'],
  providers: [
    {
      provide: DEMO_FACADE,
      useClass: Demo3Facade
    }]
})
export class Demo3Component implements OnDestroy {

  constructor(public productsFacade: Demo3Facade) {

  }

  ngOnDestroy(): void {
    // console.log('Demo3Component::ngOnDestroy');
  }
}
