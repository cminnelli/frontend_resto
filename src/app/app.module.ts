import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestomenuComponent } from './components/restomenu/restomenu.component';
import { QrgeneratorComponent } from './components/qrgenerator/qrgenerator.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupSelectComponent } from './components/popup-select/popup-select.component';
import { BrumeQuantityComponent } from './components/brume-quantity/brume-quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    RestomenuComponent,
    QrgeneratorComponent,
    PopupSelectComponent,
    BrumeQuantityComponent

  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
