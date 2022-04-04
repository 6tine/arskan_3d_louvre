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

  selectedObject: ArskanObject = new ArskanObject({});
  selectedProfile: Profile = new Profile();
  embedUrl : string | undefined;
  arskanUrl: string = 'https://viewer.arskan.com';
  selectedObjId: string | undefined = '';

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
    this.apiService.siloChangedSubject.subscribe(
      value => {
        console.log('silo updated');
        let element:HTMLElement = document.getElementById('btn-show-obj') as HTMLElement;
        element.click();
      }
    )
  }

  showObject() {
    //this.selectedObject = new ArskanObject(this.selectedObject);
    console.log("change object to : ")
    console.log(new ArskanObject(this.selectedObject))
    this.selectedObjId = this.selectedObject._id;
    const profileId = this.selectedProfile.id;
    this.apiService.getObjectEmbedUrl(this.selectedObjId, profileId, 'embedUrl')
      .subscribe(embedObj => {
        this.embedUrl = embedObj.url;
      });
  }

  updateObject(obj: ArskanObject){
    this.apiService.updateObject(obj)
      .subscribe(value => {
        this.selectedObject.isCurrentlyUpdated = false;
      })
  }

  startUpdate(obj: ArskanObject) {
    obj.isCurrentlyUpdated = true;
  }
}
