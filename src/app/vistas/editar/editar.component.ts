import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { trabajadorI } from '../../models/trabajador.interface'
import { ApiService } from '../../servicios/api/api.service';

import{ FormGroup, FormControl, Validators } from '@angular/forms'
import { ResponseI } from '../../models/response.interface'
import { AlertasService } from '../../servicios/alertas/alertas.service'


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {



  constructor(private activeRouter:ActivatedRoute, private router:Router, private api:ApiService, private alerta:AlertasService) { }

  datosTrabajador!:trabajadorI;

  editarForm = new FormGroup({
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
    let trabajadorid = this.activeRouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSingleTrabajador(trabajadorid).subscribe(data => {
        this.datosTrabajador = data[0];
        this.editarForm.setValue({
          'nombre' : this.datosTrabajador.Nombre,
          'correo' : this.datosTrabajador.Correo,
          'dni': this.datosTrabajador.DNI,
          'direccion': this.datosTrabajador.Direccion,
          'codigoPostal': this.datosTrabajador.CodigoPostal,
          'genero': this.datosTrabajador.Genero,
          'telefono': this.datosTrabajador.Telefono,
          'token': token,
          'pacienteId': trabajadorid,
          'fechaNacimiento': this.datosTrabajador.FechaNacimiento
        });
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:trabajadorI){

    this.api.putTrabajador(form).subscribe(data =>{
      let respuesta:ResponseI = data;
      if(respuesta.status == "ok"){
        this.alerta.showSuccess('Datos modificados', 'Hecho');
      }else{
        this.alerta.showError(respuesta.result.error_msg, 'Error');
      }
    })
  }

  eliminar(){
    let datos:trabajadorI = this.editarForm.value;
    this.api.deleteTrabajador(datos).subscribe(data => {
      let respuesta:ResponseI = data;
      if(respuesta.status == "ok"){
        this.alerta.showSuccess('Trabajador Eliminado', 'Hecho');
        this.router.navigate(['dashboard']);
      }else{
        this.alerta.showError(respuesta.result.error_msg, 'Error');
      }
    });
  }


}
