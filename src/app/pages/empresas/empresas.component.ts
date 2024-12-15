import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { FloatButtonComponent } from 'src/app/components/float-button/float-button.component';
import { EmpresasService } from 'src/app/services/empresas.service';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatMenu} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [FloatButtonComponent,MatSidenavModule,MatMenu,MatToolbarModule,MatButtonModule,MatIconModule,MatListModule],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent implements OnInit{
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

 
  empresas!:any[] 
  constructor(private empresaService:EmpresasService,private router:Router,private carritoS:CartService,public loginS:LoginService){}
  ngOnInit(): void {
    console.log(this.loginS.user);
    
   
    this.empresaService.getAllCompanies().subscribe(empresas=>{
      this.empresas=empresas
    }) 


    this.carritoS.productList=[]
  }
  toRegister(id: number){
    this.router.navigate(['productos',id])
    
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  handleFabClick() {
    console.log('FAB clicked!');
    this.router.navigate(['float'])
  }
  cerrarsesion(){
    this.loginS.signOut();
  }




  

}
