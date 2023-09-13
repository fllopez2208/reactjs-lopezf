import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdDelete } from 'react-icons/md';

const CartItem = ({ id, Nombre, Imagen, Precio, cantidad }) => {
    const { QuitarProducto } = useContext(CartContext);

    return (
        <div className="Container inline-block">
            <div className="CardItem bg-white space-x-4 p-3 m-3 rounded-lg shadow-md border border-gray-200">
                <h2 className="ItemHeader p-2 m-2 text-black text-xl font-bold mb-2">
                    {Nombre}
                </h2>

                <img src={Imagen} alt={Nombre} className="ItemImg  object-center object-cover mb-2" />
                
                <p className="Info p-1 text-black text-md font-semibold">
                    Precio: ${Precio}
                </p>
                
                <p className="Info p-1 text-black text-lg font-semibold">
                    Cantidad: {cantidad}
                </p>

                <button onClick={() => QuitarProducto(id)} className="p-4 m-4 Button bg-white border text-black hover:bg-red-600 hover:border-grey hover:text-white font-semibold py-2 px-4 rounded">
                    <MdDelete className="inline text-center mr-1" /> 
                    Quitar del carrito
                </button>
            </div>
        </div>
    );
}

export default CartItem;
