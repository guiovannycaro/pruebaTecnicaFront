import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaComponent } from './components/consulta/consulta/consulta.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ServicioComponent } from './components/servicio/servicio/servicio.component';
import { ResumenComponent } from './components/resumen/resumen/resumen.component';
import { RespuestaComponent } from './components/respuesta/respuesta/respuesta.component';

const routes: Routes = [
  {path: '' , redirectTo:'Home' , pathMatch:'full'},
  {path:'Home' , component: DashboardComponent},
  {path:'Consulta' , component: ConsultaComponent},
  {path:'Resumen' , component: ResumenComponent},
  {path:'Servicio' , component: ServicioComponent},
  {path:'Respuesta' , component: RespuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

export const routingComponents = [
  ConsultaComponent,ResumenComponent,DashboardComponent,ServicioComponent
]
