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
  public distanciaUmbral:number = 0;

  public bdistanciaUmbral:boolean = false; // el local permite ver el local a distancia?

  public bubicacion:boolean = false;

  public logosrc:string = "../../../assets/images/"

  //CATEGORIAS

  public categorias:Array<string> = [];
  public restaurantMenu:Array<any> = [];
  public restaurantMenuClasify:Array<any> = [];




  ngOnInit(): void {
   this.aRoute.params.subscribe(params => {
    this.pathresto = params.resto; // parametro rubro route
    this.updateMasterData(this.pathresto);


    this.geo.geolocalizacionActivate((position)=>{
      this.latMapUser = position.coords.latitude;
      this.lonMapUser = position.coords.longitude;
      this.distanciaLocal = this.distanceFrom(this.latMapUser , this.lonMapUser , this.latMapLocal, this.lonMapLocal)
      this.checkUmbralDistancia(this.distanciaLocal , this.distanciaUmbral , this.bdistanciaUmbral)

    });


});

  }

  checkUmbralDistancia(distancia , distranciaUmbral , menudistanciahab){

    if (menudistanciahab == true){
      this.bmainmenu = true;
      console.log("El local permite ver el menu a distancia");
    }else{
      if(parseInt(distancia)>distranciaUmbral){
        console.log("No puede acceder a la aplicacion debido a la distancia");
        this.bubicacion = true;
        this.bmainmenu = false;
      }else{
        this.bmainmenu = true;
        console.log("Ingresando a menu, distancia aceptada");
      }

    }



  }

  async updateMasterData(resto){
    this.restaurantMenu = await this.restaurant.getRestaurant(resto);
    this.pedido = JSON.stringify(this.restaurantMenu[0]);
    this.logosrc = this.logosrc + resto + ".jpg";
    console.log(this.restaurantMenu)
    console.log("master data")

    console.log("generando categorias");
    this.restaurantMenuClasify = this.categoriasCreator(this.restaurantMenu , "Categoria1")
    console.log(this.restaurantMenuClasify)
  }


  categoriasCreator(xs, key){
    let arr = [];

    let newobj = xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, []);

    this.categorias= Object.keys(newobj);
    return newobj;
  }

  restaurantMenuFilter(prop){
    let newResto = this.restaurantMenu.filter((item)=>{
      return item.Categoria1 == prop
    })

    return newResto;
  }

  abrirItem(item){
    console.log(item);
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

  logoSource(){

  }


}
