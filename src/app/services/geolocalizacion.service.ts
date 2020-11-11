
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService  {


  constructor(private _http: HttpClient) { }


  geolocalizacionActivate(callback){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
          callback(position);
        },
        (failure) => {
          if (failure.message.indexOf("Only secure origins are allowed") == 0) {
            alert('Only secure origins are allowed by your browser.');
          }
        }
      );
    }else{
      console.log("'Geolocation is not supported by your browser'")
    }

  }
}