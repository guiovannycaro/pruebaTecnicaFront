import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './components/consulta/consulta/consulta.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ServicioComponent } from './components/servicio/servicio/servicio.component';
import { ResumenComponent } from './components/resumen/resumen/resumen.component';
import { HeaderComponent } from './components/Plantilla/header/header.component';
import { FooterComponent } from './components/Plantilla/footer/footer.component';
import { RespuestaComponent } from './components/respuesta/respuesta/respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    DashboardComponent,
    ServicioComponent,
    ResumenComponent,
    HeaderComponent,
    FooterComponent,
    RespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
