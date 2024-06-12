import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//? Configuración del locale de la app
import localeEsMX from '@angular/common/locales/es-MX'; //* Español México
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMX);
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX' //* Definir el idioma por defecto
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
