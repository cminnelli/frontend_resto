import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestomenuComponent } from './components/restomenu/restomenu.component';
import { QrgeneratorComponent } from './components/qrgenerator/qrgenerator.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    RestomenuComponent,
    QrgeneratorComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
