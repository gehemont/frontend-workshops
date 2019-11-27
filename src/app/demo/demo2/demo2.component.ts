import { Component, OnDestroy } from '@angular/core';
import { Demo2Facade } from './demo2.facade';
import { DEMO_FACADE } from '../demo';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  providers: [
    {
      provide: DEMO_FACADE,
      useClass: Demo2Facade
    }]
})
export class Demo2Component implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Demo2Component::ngOnDestroy');
  }
}
