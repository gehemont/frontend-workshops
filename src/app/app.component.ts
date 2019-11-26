import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Demo3Facade } from './demo/demo3/demo3.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend Workshops @ngrx/entity';

  constructor(private _appService: AppService, private _demo3Facade: Demo3Facade) {
    this._demo3Facade.loadInitData();
  }

  addNewProduct() {
    this._appService.addNewProduct();
  }
}
