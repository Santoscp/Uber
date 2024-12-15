import { Pedido } from "./IPedido";
import { Product } from "./IProducto";


export interface ICarrito {
    id_prod:Product,
    cantidad:number,
    id_ped:Pedido
    id:number

}
