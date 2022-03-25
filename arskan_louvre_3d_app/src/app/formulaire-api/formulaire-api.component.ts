import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../services/api-service.service";
import {ArskanObject} from "../model/ArskanObject";
import {Profile} from "../model/profile";
import {Pointer} from "../model/pointer";

@Component({
  selector: 'app-formulaire-api',
  templateUrl: './formulaire-api.component.html',
  styleUrls: ['./formulaire-api.component.css']
})
export class FormulaireApiComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  objectsList: ArskanObject[] | undefined;
  profileList: Profile[] | undefined;
  pointersList: Pointer[] | undefined

  selectedObject: ArskanObject = new ArskanObject();
  selectedProfile: Profile = new Profile();
  selectedPointer: Pointer = new Pointer();
  embedUrl : string | undefined;
  arskanUrl: string = 'https://viewer.arskan.com';


  ngOnInit(): void {
    this.apiService.getAllObjects().subscribe(
      objects => {
        console.log(objects);
        this.objectsList = objects;
        console.log(this.objectsList);
        this.selectedObject = this.objectsList[0];
      }
    )
    this.apiService.getProfiles().subscribe(
      profiles => {
        console.log(profiles);
        this.profileList = profiles;
        this.selectedProfile = this.profileList[0];
      }
    )
  }

  showObject() {
    const objId = this.selectedObject._id;
    const profileId = this.selectedProfile.id;
    this.apiService.getObjectEmbedUrl(objId, profileId, 'embedUrl')
      .subscribe(embedObj => {
        this.embedUrl = embedObj.url;
      });

    this.apiService.getAllPointersFrom(objId)
      .subscribe(
        pointers => {
          this.pointersList = pointers;
        }
      )
  }
}
