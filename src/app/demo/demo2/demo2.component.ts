import { Component } from '@angular/core';
import { Demo2Facade } from './demo2.facade';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  providers: [
    {
      provide: 'ProductsFacade',
      useClass: Demo2Facade
    }]
})
export class Demo2Component {
}
