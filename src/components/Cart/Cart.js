import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { MdCreditCard, MdRemoveShoppingCart, MdHomeFilled, MdList } from 'react-icons/md'

const Cart = () => {
    const { cart, LimpiarCarrito, totalQuantity, total} = useContext(CartContext)
    if (totalQuantity === 0 ) {
        return (
            <div>
                <h3 className="text-white text-2xl font-semibold p-4 m-4"> No hay items en el carrito.</h3>
                <Link to='/Todos' className="p-4 m-4 Button bg-black border border-white text-white hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded"> <MdList className="inline text-lg mr-1" />Ver todos los productos</Link>
                <Link to='/' className="p-4 m-4 Button bg-black border border-white text-white hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded"><MdHomeFilled className="inline text-2xl mr-1" /> Home </Link>
            </div>
        )
    }


    

    return (
        <div className="Container inline-block bg-black space-x-4 p-3 m-3">
            {cart.map(producto => <CartItem key={producto.codigo} {...producto}/>)}
            <div className="p-4 m-4 text-center text-3xl text-white font-semibold">Total: ${total}</div>
            <div className="inline">
                <button onClick={() => LimpiarCarrito()} className="p-4 m-4 Button bg-white border border-grey text-black hover:bg-blue-400 hover:text-white font-semibold py-2 px-4 rounded">
                    <MdRemoveShoppingCart className="inline text-lg mr-1" /> Limpiar carrito
                </button>
                <Link to='/checkout' className="p-4 m-4 Button bg-white border border-grey text-black hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded">
                    <MdCreditCard className="inline text-lg mr-1"/> Generar pedido
                </Link>
            </div>
        </div>
    );
    
    
    
    
}

export default Cart