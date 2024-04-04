import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recluso } from 'src/app/recluso';
import { ReclusoservService } from 'src/app/reclusoserv.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  id:number;
  recluso: Recluso;
  constructor(private route: ActivatedRoute, private reclusoserv: ReclusoservService){

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
      this.recluso = new Recluso();
      this.reclusoserv.obtenerporId(this.id).subscribe(dato => {
        this.recluso = dato;
      });
      
  }

}
