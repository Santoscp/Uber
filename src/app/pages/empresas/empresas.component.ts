import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';


@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent implements OnInit{
  empresas!:any[] 
  constructor(private empresaService:EmpresasService,private router:Router){}
  ngOnInit(): void {
    
    this.empresaService.getAllCompanies().subscribe(empresas=>{
      this.empresas=empresas
    }) 
  }
  toRegister(id: number){
    this.router.navigate(['productos',id])
    
  }




  

}
