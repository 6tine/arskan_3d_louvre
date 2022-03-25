import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {Profile} from "../model/profile";
import {ArskanObject} from "../model/ArskanObject";
import {EmbedObj} from "../model/embedObj";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {
  }

  url_arskan : string = 'https://public-api.arskan.com'
  url_get_object: string = "/objects"
  url_get_pointers: string = "/pointers"
  url_obj_embed : string = '/embed'
  url_get_profiles : string = '/profiles'
  //object_id: string = "62278d4dcd78795d5ce9b52b"
  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlbGluZUBrcmFiYmkuZnIiLCJzaWxvIjoiNjIxNjVmOWFlZjAwZjAyZTEzYzc2ZDdjIiwiaWF0IjoxNjQ2OTA5MzExLCJpc3MiOiJodHRwczovL2FwaS5hcnNrYW4uY29tIn0.ENwjv5bwwtwxOWcGMxJ4CZ-GrhamEfDOMjPmm2Bpdac"

  getAllObjects(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      })
    }
    return this.http.get<ArskanObject[]>(
      this.url_arskan + this.url_get_object,
      httpOptions
    )
      .pipe(
        catchError(this.handleError),

      )
  }

  getAllPointersFrom(objectId = "62278d4dcd78795d5ce9b52b"){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      })
    }
    return this.http.get(
      this.url_arskan + this.url_get_object + '/'+objectId + this.url_get_pointers,
      httpOptions
      )
      .pipe(
        catchError(this.handleError),

      )
  }

  getProfiles(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      })
    }
    return this.http.get<Profile[]>(
      this.url_arskan + this.url_get_profiles,
      httpOptions
    )
      .pipe(
        catchError(this.handleError),

      )
  }

  getObjectEmbedUrl(objectId = "62278d4dcd78795d5ce9b52b", profileId = '5f1ab0fe18bb396bbe590a19', name = 'toto'){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      })
    }
    return this.http.post<EmbedObj>(
      this.url_arskan + this.url_get_object +'/' + objectId + this.url_obj_embed,
      {
        'name' : name,
        'profile': profileId
      }, httpOptions
    )
      .pipe(
        catchError(this.handleError),

      )
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
