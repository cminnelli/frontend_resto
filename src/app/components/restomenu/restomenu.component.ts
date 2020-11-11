import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../services/restaurants.service';
import {Router , ActivatedRoute} from '@angular/router';

import {GeolocalizacionService} from '../../services/geolocalizacion.service'

@Component({
  selector: 'restomenu',
  templateUrl: './restomenu.component.html',
  styleUrls: ['./restomenu.component.scss']
})
export class RestomenuComponent implements OnInit {

  

  constructor(private router:Router , private aRoute: ActivatedRoute , private geo:GeolocalizacionService, private restaurant:RestaurantsService) { }
  public pathresto:string;
  public bqrcode:boolean = false;
  public bmainmenu: boolean = true;

  public pedido:any;
  public nped:number=0;

  //UBICACION
  public latMapUser:number;
  public lonMapUser:number;

  public latMapLocal:number = -34.491985;
  public lonMapLocal:number = -58.5222557;

  public distanciaLocal:string = "" ;
  public distanciaUmbral:number = 1;

  public bubicacion:boolean = false;
  



  public restaurantMenu:Array<any> = [];
  ngOnInit(): void {
   this.aRoute.params.subscribe(params => {
    this.pathresto = params.resto; // parametro rubro route
    this.updateMasterData(this.pathresto);

    this.geo.geolocalizacionActivate((position)=>{
      this.latMapUser = position.coords.latitude;
      this.lonMapUser = position.coords.longitude;
      this.distanciaLocal = this.distanceFrom(this.latMapUser , this.lonMapUser , this.latMapLocal, this.lonMapLocal)
      console.log(parseInt(this.distanciaLocal))
      if(parseInt(this.distanciaLocal)>this.distanciaUmbral){
        console.log("distanciaaaa")
        this.bubicacion = true;
        this.bmainmenu = false;
      }else{
        this.bmainmenu = true;
        console.log("no distanciaaaa")
      }

    });


});

  }

  async updateMasterData(resto){
    this.restaurantMenu = await this.restaurant.getRestaurant(resto);
    this.pedido = JSON.stringify(this.restaurantMenu[0]);
    console.log(this.pedido)
    console.log("master ada")
  }


  crearqr(){
    this.nped +=1;

    this.pedido = JSON.stringify(this.restaurantMenu [this.nped]);
    this.bmainmenu = false;
    this.bqrcode = true;
  }

  distanceFrom(lat1 , lon1 , lat2 , lon2) {
    var radianLat1 = lat1 * (Math.PI / 180);
    var radianLng1 = lon1 * (Math.PI / 180);


    var radianLat2 = lat2 * (Math.PI / 180);
    var radianLng2 = lon2 * (Math.PI / 180);

    var earth_radius = 3959; // or 6371 for kilometers

    var diffLat = (radianLat1 - radianLat2);
    var diffLng = (radianLng1 - radianLng2);
    var sinLat = Math.sin(diffLat / 2);
    var sinLng = Math.sin(diffLng / 2);
    var a = Math.pow(sinLat, 2.0) + Math.cos(radianLat1) * Math.cos(radianLat2) * Math.pow(sinLng, 2.0);
    var distance = earth_radius * 2 * Math.asin(Math.min(1, Math.sqrt(a)));
    return distance.toFixed(0);
}


  menuOpt(){
    this.bmainmenu = true;
    this.bqrcode = false;
  }

  qrOpt(){
    
  }


  adminOpt(){
    
  }


}
