import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend Workshops @ngrx/entity';

  constructor(private _appService: AppService) {

  }

  addNewProduct() {
    this._appService.addNewProduct();
  }
}
