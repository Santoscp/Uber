import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { ProductosComponent } from './pages/productos/productos.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'productos/:id',component:ProductosComponent},
  {path:'empresas',component:EmpresasComponent},
  {path:'carrito',component:CarritoComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
