import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { EmpresasService } from 'src/app/services/empresas.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  @ViewChild('productSearch') productSearch!: ElementRef;
  @ViewChild('productResults') productResults!: ElementRef;
  productos!:any[]
  id!:number | any
result!:any[]
selectedProduct: any = null; // add this line

  
  constructor(private productService:ProductService, private empresaService:EmpresasService,private route: ActivatedRoute){
     
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
       this.id = params.get('id');

      this.productService.getAllProductsByCompanies(this.id).subscribe(productos=>{
        this.productos=productos
      })
      
    });
   
  
  }
  onSearchInputChange(): void {
    const searchTerm = this.productSearch.nativeElement.value.toLowerCase();
    const matchingProducts = this.productos.filter(product => product.nombre.toLowerCase().includes(searchTerm));
    if (matchingProducts.length > 0) {
      this.selectedProduct = matchingProducts[0];
    } else {
      this.selectedProduct = null;
    }
  }
}
