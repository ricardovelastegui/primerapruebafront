import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recluso } from 'src/app/recluso';
import { ReclusoservService } from 'src/app/reclusoserv.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit{

  form : FormGroup;

  id:number;
  nombre:string;
  recluso:Recluso = new Recluso();

  constructor(private reclusoserv: ReclusoservService, private router: Router, private route:ActivatedRoute, private fb: FormBuilder){
    
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.reclusoserv.obtenerporId(this.id).subscribe(dato =>{
      this.recluso = dato;
    }, error => console.log(error));
  }

  irAlalista(){
    this.router.navigate(['/obtener']);
  }

  onSubmit(){
    this.reclusoserv.actualizar(this.id, this.recluso).subscribe( dato =>{
      this.irAlalista();
    }, error => console.log(error));
  }

}
