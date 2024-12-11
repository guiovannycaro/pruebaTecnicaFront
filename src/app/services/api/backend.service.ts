import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { ClienteI } from '../../Models/clientes.interface';
import { ResponseI } from '../../Models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendService {




  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  BaseUrl:string =  "http://localhost:8090/pruebaTecnica/";

  obtenerListaClientes():Observable<ClienteI[]>{
    let direccion = this.BaseUrl + "CrudClientes/ListarCliente";
    let response = this.http.get<ClienteI[]>(direccion,this.httpOptions);
    return response;
}

getClientesByTipoNumero(tipo: string, numero: string): Observable<any>{

  let direccion = this.BaseUrl + "CrudClientes/BuscarCliente?tipo="+tipo+"&numero="+numero;
  let response = this.http.get<any>(direccion);
  console.log(response);
  return response;
}
}
