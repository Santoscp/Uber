import { Injectable } from '@angular/core';
import { Product } from '../model/IProducto';
import {Pedido} from '../model/IPedido';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList : Product[]=[]
  pedido:Pedido={ 
    id:1,
    //estado:EstadoEnum,
    id_repartidor: 1,
    //pago:PagoEnum,
    regogida:true,

  }

  constructor() { }



  addProductToCart( p : Product){
    this.productList.push(p)
  }

  deleteProductInCart( p : Product){
    //this.productList.splice(p.id);

  }
  listAllProduct():Product[]{
    return this.productList
  }
}
