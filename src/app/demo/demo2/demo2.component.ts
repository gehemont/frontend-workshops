import { Component, OnInit } from '@angular/core';
import { Demo3Facade } from '../demo3/demo3.facade';
import { Demo2Facade } from './demo2.facade';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
  providers: [
    {
      provide: Demo3Facade,
      useClass: Demo2Facade
    }
  ]
})
export class Demo2Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
