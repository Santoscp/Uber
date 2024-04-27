export interface Pedido{
    id:number,
    estado:EstadoEnum,
    id_repartidor: number,
    pago:PagoEnum,
    regogida:boolean
}

export enum EstadoEnum {
    comprando = 'Comprando',
    procesando = 'Procesando',
    listo= "Listo",
    finalizado = "Finalizado"
  }

  export enum PagoEnum {
    visa = "Visa",
    paypal= "Paypal",
    efectivo = "Efectivo"

  }