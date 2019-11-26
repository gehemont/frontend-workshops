import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Frontend Workshops @ngrx/entity';

  constructor(public appService: AppService) {
    this.appService.loadInitData();
  }

}
