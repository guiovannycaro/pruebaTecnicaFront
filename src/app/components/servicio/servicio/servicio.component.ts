import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../../../services/api/backend.service';
import { ClienteI } from '../../../Models/clientes.interface';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent   implements OnInit {

  clientes: ClienteI[] = [];

  servidata:any;

  constructor(private api:BackendService,private router: Router){}

  servForm = new FormGroup({
    tipoDocumento : new FormControl('',Validators.required),
    numDocumento : new FormControl('',Validators.required)
 });

 tdocumento: string  | null = null;
 ndocumento: string  | null = null;

  ngOnInit(): void {

  }

  consultaServ(){


  }

  onSubmit(){
 console.log(this.servForm.value);
 console.log(this.servForm.get('tipoDocumento')?.value);
 console.log(this.servForm.get('numDocumento')?.value);

this.tdocumento = this.servForm.get('tipoDocumento')?.value as string | null;
this.ndocumento = this.servForm.get('numDocumento')?.value as string | null;


this.api.getClientesByTipoNumero(this.tdocumento ?? '', this.ndocumento ?? '').subscribe(res => {
  this.servidata = res;
  console.log(this.servidata);
  if (this.servidata) {
    sessionStorage.setItem('servidata',JSON.stringify(this.servidata));
    this.router.navigate(['/Respuesta']);
  } else {
    console.error('Cliente no encontrado');
    alert('No se encontró el cliente. Por favor, inténtelo de nuevo.');
  }
});
  }
}
