import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ConnectionService} from './connection.service';
import { ApiComponent } from './api/api.component';


@NgModule({
   declarations: [
      AppComponent,
      ApiComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      ConnectionService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
