import { useState } from "react"
import swal from "sweetalert"

export const CantidadOrden = (initialValue = 0) => {
    const [Pedido, setCantidadOrden] = useState(initialValue)

    const aumentar= (value) =>{
        if(Pedido===10){
            swal("Excede cantidad", "El máximo a pedir es 10 unidades, para volumen coordinar con ventas", "warning");
        }else{
            setCantidadOrden(Pedido+1)
        }
    }
    const reducir = (value) =>{
        if(Pedido<1) return
        setCantidadOrden(Pedido-1)
    }
    const eliminar = ()=>{
        setCantidadOrden(initialValue)
    }
    return{
        Pedido,
        aumentar,
        reducir,
        eliminar
    }
}