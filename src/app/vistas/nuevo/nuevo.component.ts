import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators } from '@angular/forms'
import { trabajadorI } from '../../models/trabajador.interface'
import { ResponseI } from '../../models/response.interface'
import { ApiService } from '../../servicios/api/api.service';
import { AlertasService } from '../../servicios/alertas/alertas.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private api:ApiService,private router:Router, private alert:AlertasService) { }

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
    direccion:new FormControl(''),
    codigoPostal:new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token:new FormControl(''),
    pacienteId:new FormControl(''),
    fechaNacimiento:new FormControl('')
  });


  salir(){
    this.router.navigate(['dashboard']);
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token':token
    })
  }

  postForm(form:trabajadorI){
    this.api.postTrabajador(form).subscribe(data =>{
      console.log(data);
    })
  }

}
