import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private hhtp:HttpClient) { }
apiUrl:string=environment.api.endpoint+"/"+environment.api.apiProduct

  obtenerTodosLosProductos():Observable<any[]>{
    console.log(this.apiUrl);
    
    return this.hhtp.get<any[]>(this.apiUrl);
    
  }
  getAllProductsByCompanies(id : number):Observable<any[]>{
    console.log(this.apiUrl+"/"+id);
    
    
    return this.hhtp.get<any[]>(this.apiUrl+"/companies/"+id);
    
  }
  getAllProductsByName(name : string):Observable<any[]>{
    //console.log(this.apiUrl+"/"+name);
    
    
    return this.hhtp.get<any[]>(this.apiUrl + "/name/" + encodeURIComponent(name));
    
  }
}
