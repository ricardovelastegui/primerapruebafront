import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recluso } from 'src/app/recluso';
import { ReclusoservService } from 'src/app/reclusoserv.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reclusos: Recluso[];

  constructor(private reclusoserv: ReclusoservService, private router: Router){}
  filterRecluso='';

  ngOnInit(): void {
    this.obtenerreclusos();
      
  }

  actualizar(id:number){
    this.router.navigate(['actualizar', id]);
  }

  eliminar(id:number){
    this.reclusoserv.eliminar(id).subscribe(dato => {
      console.log(dato);
      this.obtenerreclusos();
    })
  }

  private obtenerreclusos(){
    this.reclusoserv.obtenerreclusos().subscribe(dato => {

      this.reclusos = dato;

    });
  }

  ver(id:number){
    this.router.navigate(['ver', id]);
  }

}
