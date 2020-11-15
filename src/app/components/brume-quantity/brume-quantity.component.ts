import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'brume-quantity',
  templateUrl: './brume-quantity.component.html',
  styleUrls: ['./brume-quantity.component.scss']
})
export class BrumeQuantityComponent implements OnInit {

  @Input() cantidadIn:number;
  @Output() cantidadOut =  new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    if (this.cantidadIn == undefined){
      this.cantidadIn = 1;
    }
  }



  incrementar(){
    this.cantidadIn +=1;
    this.cantidadOut.emit(this.cantidadIn);
  }

  decrementar(){
    if (this.cantidadIn>1){
      this.cantidadIn -=1;
      this.cantidadOut.emit(this.cantidadIn);
    }
  }

}
