import { Component, OnInit, Input } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'qrgenerator',
  templateUrl: './qrgenerator.component.html',
  styleUrls: ['./qrgenerator.component.scss']
})
export class QrgeneratorComponent implements OnInit {

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  @Input() value;


  constructor() {

  }


  ngOnInit(): void {
  }

  
}
