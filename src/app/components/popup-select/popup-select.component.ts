import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'popup-select',
  templateUrl: './popup-select.component.html',
  styleUrls: ['./popup-select.component.scss']
})
export class PopupSelectComponent implements OnInit {
  @Input() item:any;
  public variedad:Array<string> = []
  public bvariedad:boolean = false;
  public varianteSeleccionado:string = "";

  public ingredientes:Array<string> = []
  public bingredientes:boolean = false;
  public ingredientesElegibles:boolean = false;

  public cantidad:number = 1;
  public total : number = 0;

  public itemCompra:any = {
    nombre:"",
    cantidad:0,
    precio:0,
    total:0,
    variante:"",
    ingredientes:[]
  }

  @Output() descartar =  new EventEmitter<Boolean>();
  @Output() agregarItem =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.variedades(this.item.Variedad)
    this.ingrediente(this.item.Adherezos);
    this.total = this.item.Precio;
    this.cabeceraItemCompra(this.item)


  }

  cabeceraItemCompra(item){
    this.itemCompra["nombre"] = item.nombre;
    this.itemCompra["precio"] = item.Precio;

  }



  variedades(arrayVariedad){
    this.variedad = arrayVariedad.split(",");
    let nvariedad = this.variedad.length;
    if(nvariedad >1){
      console.log(nvariedad);
      this.bvariedad = true;
      console.log("hay variedad")
    }else{
      console.log("sin variedad")
    }
  }

  ingrediente(arrayIngredientes){
    this.ingredientes = arrayIngredientes.split(",");
    let ningredientes = this.ingredientes.length;
    if(ningredientes >1){
      console.log(ningredientes);
      this.bingredientes = true;
      console.log("hay variedad")
    }else{
      console.log("sin variedad")
    }
  }

  agregar(){
    this.itemCompra["cantidad"] = this.cantidad;
    this.itemCompra["total"] = this.total;
    this.itemCompra["variante"] = this.varianteSeleccionado;
    this.agregarItem.emit(this.itemCompra)
    this.descartar.emit(false);
   }

  getCantidad(can:number){
    this.cantidad = can;
    this.total = this.cantidad * this.item.Precio;
  }

  descartarItem(){
    this.descartar.emit(false);
  }

}
