import { Component } from '@angular/core';
import {ApiServiceService} from "./services/api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arskan_louvre_3d_app';

  constructor(public apiService: ApiServiceService) {

  }

  test(){
    this.apiService.getAllPointersFrom("62278d4dcd78795d5ce9b52b")
      .subscribe(
        resp => {
          console.log(resp)
        }
      )
  }
}
