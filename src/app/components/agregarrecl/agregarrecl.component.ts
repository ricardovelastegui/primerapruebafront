import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recluso } from 'src/app/recluso';
import { ReclusoservService } from 'src/app/reclusoserv.service';

@Component({
  selector: 'app-agregarrecl',
  templateUrl: './agregarrecl.component.html',
  styleUrls: ['./agregarrecl.component.scss']
})
export class AgregarreclComponent implements OnInit{

  recluso: Recluso = new Recluso();
  constructor( private reclusoServ: ReclusoservService, private router:Router ){}

  ngOnInit(): void {

    console.log(this.recluso);
      
  }

  guardarrecluso(){
    this.reclusoServ.agregarrecluso(this.recluso).subscribe(dato => {
      console.log(dato);
      this.irAlalista();

    }, error => console.log(error));
  }

  irAlalista(){
    this.router.navigate(['/obtener']);
  }
  onSubmit(){

    this.guardarrecluso();
    
  }

}
