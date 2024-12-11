import { Component , OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit{

  servidata: any;

  constructor(private route: ActivatedRoute,private router:Router) {}

  public salir(){
    localStorage.removeItem('servidata');
    this.router.navigate(['/Consulta']);
  }

  ngOnInit(): void {
    // Recupera los datos del estado de la navegación
    const data = sessionStorage.getItem('datos');
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
