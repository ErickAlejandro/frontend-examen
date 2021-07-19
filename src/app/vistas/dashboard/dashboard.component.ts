import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'
import { Router } from '@angular/router';

import { listaTrabajadoresI } from '../../models/listapacientes.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  trabajadores!:listaTrabajadoresI[];

  constructor(private api: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.api.getAllTrabajadores(1).subscribe(data => {
      this.trabajadores = data;
    });
  }

  editarTrabajador(id:any){
    this.router.navigate(['editar', id]);
  }

  nuevoTrabajador(){
    this.router.navigate(['nuevo']);
  }
}
