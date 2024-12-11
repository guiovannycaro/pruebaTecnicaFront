import { Component , OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent  implements OnInit{
  servidata: any;

  constructor(private route: ActivatedRoute,private router:Router) {}


  public salir(){
    localStorage.removeItem('servidata');
    this.router.navigate(['/Servicio']);
  }

  ngOnInit(): void {
    // Recupera los datos del estado de la navegación
    const data = sessionStorage.getItem('servidata');
    if (data) {
      console.log('llegada ' + data);
      this.servidata = JSON.parse(data);
    }else{
      console.error('No hay datos disponibles.');
    }
  }

  onSubmit(){
    this.salir();

  }
}
