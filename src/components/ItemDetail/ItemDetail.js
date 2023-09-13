import { useContext, useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { MdCheck } from 'react-icons/md'


const ItemDetail = ({id, Nombre, Imagen, Categoria, Descripcion, Precio, stock}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const { agregarProducto } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const producto = {
            id, Nombre, Imagen, Precio
        }

        agregarProducto(producto, cantidad);
    }

    return (
        <div className="flex justify-center flex-col items-center space-x-4">
        <div className="CardItem flex-col items-center bg-white p-4 m-4 rounded-lg shadow-md border border-gray-200">
            <h2 className="ItemHeader text-black text-lg font-bold p-2">
                {Nombre}
            </h2>
    
            <div className="flex justify-center items-center mb-2">
                <img src={Imagen} alt={Nombre} className="ItemImg object-center object-cover" />
            </div>
            
            <p className="Info text-slate-600 text-m p-2">
                Codigo: {id}
            </p>
    
            <p className="Info text-black text-m font-semibold p-2">
                Categoria: {Categoria}
            </p>
            <p className="Info text-black text-sm p-2">
                {Descripcion}
            </p>

            <p className="Info text-black text-m p-2 font-semibold">
                Precio: ${Precio}
            </p>
            <footer className='Item footer p-2'>
                {
                    cantidadAgregada > 0 ? (
                        <Link to= '/cart' className='Button bg-white border border-grey text-black hover:bg-blue-400 hover:text-white font-semibold py-2 px-4 rounded'> <MdCheck className="inline-block mr-1 text-center" /> Terminar compra</Link>
                    ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> )
                }
            
            </footer>
        </div>  
    </div>
    
    )
}

export default ItemDetail;
