import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireApiComponent } from './formulaire-api/formulaire-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material.module";
import {FormsModule} from "@angular/forms";
import {SafePipeModule} from "safe-pipe";
import { PointersListComponent } from './pointer/pointers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireApiComponent,
    PointersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
