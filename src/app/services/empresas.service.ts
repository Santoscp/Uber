import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor( private hhtp:HttpClient) { }
  apiUrl:string=environment.api.endpoint+"/"+environment.api.apiEmpresas
  
    getAllCompanies():Observable<any[]>{
      console.log(this.apiUrl);
      
      return this.hhtp.get<any[]>(this.apiUrl);
      
    }

    
}
