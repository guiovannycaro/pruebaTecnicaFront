import { Component ,OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/json/client.service';
import { Usuarios } from '../../../Models/usuarios.interface';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  usuarios: Usuarios[] = [];

  servidata:any;

  constructor( private cliente: ClientService, private router: Router){
  }

  jsonForm = new FormGroup({
    tipoDocumento : new FormControl('',Validators.required),
    numDocumento : new FormControl('',
      [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(11),
        Validators.pattern(/^\d+$/),
      ])
 });

 formatNumber(event: Event) {
  const input = event.target as HTMLInputElement;
  input.value = new Intl.NumberFormat('es-ES').format(Number(input.value.replace(/\D/g, '')));
}

 tdocumento: string  | null = null;
 ndocumento: string  | null = null;

  ngOnInit(): void {

  }


  onSubmit(){
    console.log(this.jsonForm.get('tipoDocumento')?.value);
    console.log(this.jsonForm.get('numDocumento')?.value);

   this.tdocumento = this.jsonForm.get('tipoDocumento')?.value as string | null;
   this.ndocumento = this.jsonForm.get('numDocumento')?.value as string | null;
   if (this.jsonForm.valid) {
this.cliente.getClientByDocumentTypeAndNumber(this.tdocumento ?? '', this.ndocumento ?? '').subscribe(data=>{
  this.servidata = data;
  console.log(this.servidata);
  if (this.servidata) {
    sessionStorage.setItem('datos',JSON.stringify(this.servidata));
    this.router.navigate(['/Resumen']);
  } else {
    console.error('Cliente no encontrado');
    alert('No se encontró el cliente. Por favor, inténtelo de nuevo.');
  }
});
}else{
  console.error('Formulario no válido');
  alert('Por favor, complete todos los campos requeridos.');
}

  }
}
