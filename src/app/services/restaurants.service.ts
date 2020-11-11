import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  public environment = {apilocal:"http://localhost:3000/api/", apiback:"https://backendbrume.herokuapp.com/api/" , web:"https://brumelab.com.ar/api/"}

  constructor(private _http: HttpClient) { }

  async getRestaurant(restaurant:string): Promise<any> {
    let urlComp = this.environment.apilocal + "brumelabresto/" + restaurant ;
    console.log(urlComp)
    return this._http.get(urlComp , {headers: {'Content-type': 'application/json'}} ).toPromise()
  }


}
