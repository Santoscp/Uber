import { Component, LOCALE_ID, OnInit, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { Product } from 'src/app/model/IProducto';
import { CartService } from 'src/app/services/cart.service';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatMenu} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list'
import {FormsModule} from '@angular/forms';

interface OrderLine{
  product:Product
  q:number
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [MatSidenavModule,MatMenu,MatToolbarModule,MatButtonModule,MatIconModule,MatListModule,MatRadioModule,FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;


optionToBuy!: string;
options: string[] = ['Recogida en tienda', 'Llevar a domicilio'];

optionToPay!: string;
optionsPay: string[] = ['Visa', 'Efectivo','PayPal'];


  product!:Product[]
  pro:WritableSignal<OrderLine[]>=signal([]);   //es una variable que quisiera que fuera reactiva
  preciototal:Signal<number>=computed(()=>{
    console.log("cambia")
    let precio = 0;
    for(let p of this.pro()){
      precio+=p.q*p.product.precio;
    }
    return precio;
}) //este valor depende del calculo de otros valores , en concreto pro
 
  constructor(private carritoS:CartService){

  }
  ngOnInit(): void {

    this.product=this.carritoS.listAllProduct()
    this.pro.set(this.groupProductsByQuantity(this.product));
    console.log(this.pro);  
  }

  increaseQuantity(p:OrderLine): void {
    this.pro.update(pro => {
      const index = pro.findIndex(orderLine => orderLine.product.id === p.product.id);
      if (index !== -1) {
        pro[index].q++;
      }
      console.log(pro)
      return [...pro];
    });

  }

  decreaseQuantity(p:OrderLine): void {
    this.pro.update(pro => {
      const index = pro.findIndex(orderLine => orderLine.product.id === p.product.id);
      if (index !== -1 && pro[index].q > 0) {
        pro[index].q--;
      }
      return [...pro];
    });

  }


  groupProductsByQuantity(products: Product[]): OrderLine[] {
    const orderLines: OrderLine[] = [];
  
    products.forEach(product => {
      const existingOrderLine = orderLines.find(line => line.product.id === product.id);
  
      if (existingOrderLine) {
        existingOrderLine.q += 1;
      } else {
        orderLines.push({ product: product, q: 1 });
      }
    });
  
    return orderLines;
  }}


