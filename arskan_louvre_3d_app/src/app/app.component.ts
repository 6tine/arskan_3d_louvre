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

  test2() {
    let name = 'toto';
    let profileId;
    this.apiService.getProfiles().subscribe(
      profiles => {
        console.log(profiles)
        profileId = profiles[2]['id']
        console.log('profileId : ', profileId)
        this.apiService.getObjectEmbedUrl("62278d4dcd78795d5ce9b52b",profileId, name)
          .subscribe(
            resp => {
              console.log(resp)
            }
          )
      }
    )
    /*this.apiService.getOneObjectEmbed("62278d4dcd78795d5ce9b52b")
      .subscribe(
        resp => {
          console.log(resp)
        }
      )*/
  }
}
