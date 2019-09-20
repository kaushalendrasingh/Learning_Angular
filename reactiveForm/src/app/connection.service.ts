import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  baseUrl = environment.url;
  constructor(private _http: HttpClient) {}

name : "utka";
 postMethod(main_url,body) {
   return this._http.post(this.baseUrl+'/'+main_url,body)
 }



}
