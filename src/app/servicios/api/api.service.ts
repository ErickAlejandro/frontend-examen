import { Injectable } from '@angular/core';
import { loginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { trabajadorI } from '../../models/trabajador.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { listaTrabajadoresI } from '../../models/listapacientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://api.solodata.es/";

  constructor( private http:HttpClient) { }

  loginByEmail(form:loginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllTrabajadores(page:number):Observable<listaTrabajadoresI[]>{
    let direccion = this.url + "pacientes?page=" + page;
    return this.http.get<listaTrabajadoresI[]>(direccion);
  }

  getSingleTrabajador(id:any):Observable<trabajadorI[]>{
    let direccion = this.url + "pacientes?id=" + id;
    return this.http.get<trabajadorI[]>(direccion);
  }

  putTrabajador(form:trabajadorI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    return this.http.put<ResponseI>(direccion, form);
  }

  deleteTrabajador(form:trabajadorI):Observable<ResponseI>{
    let direccion = this.url + "pacientes";
    let options = {
      Headers: new HttpHeaders({
        'Conten-type': 'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, options);
  }

  postTrabajador(form:trabajadorI):Observable<ResponseI[]>{
    let direccion = this.url + "/pacientes"
    return this.http.post<ResponseI[]>(direccion, form);
  }

}
