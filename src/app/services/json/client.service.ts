import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , of } from 'rxjs';
import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientesUrl = '../../../assets/clientes.json';

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>(this.clientesUrl);
  }

  getClientByDocumentTypeAndNumber(tipoDocumento: string, numeroDocumento: string): Observable<any> {
    console.log('Buscando cliente con tipoDocumento:', tipoDocumento, 'y numeroDocumento:', numeroDocumento);

    return this.http.get<any[]>(this.clientesUrl).pipe(
      map((clientes) => {
        const cliente = clientes.find(
          (cliente) =>
            cliente.tipoDocumento === tipoDocumento &&
            cliente.numeroDocumento === numeroDocumento
        );
        console.log('Cliente encontrado:', cliente); // Mostrar cliente encontrado en consola
        return cliente;
      }),
      catchError((error) => {
        console.error('Error al cargar el archivo JSON:', error);
        return of(null); // Retorna null en caso de error
      })
    );
  }

}
