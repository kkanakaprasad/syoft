import { Component } from '@angular/core';
import { HttpDataService } from 'src/shared/http-service/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syoft';
  loadingCount :number = this.httpDataService.loadingCount;

  constructor(public httpDataService:HttpDataService){
  }

  ngAfterContentChecked() {
    this.loadingCount = this.httpDataService.loadingCount
  }
}
