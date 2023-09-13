import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        
        const newTotalQuantity = cart.reduce((total, producto) => total + producto.cantidad, 0);
        const newTotal = cart.reduce((total, producto) => total + producto.Precio * producto.cantidad, 0);

        setTotalQuantity(newTotalQuantity);
        setTotal(newTotal);
    }, [cart]);

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const agregarProducto = (producto, cantidad) => {
        if (!EstaEnCarrito(producto.id)) {
            setCart(prev => [...prev, { ...producto, cantidad }]);
        } 
    }

    const QuitarProducto = (productoCod) => {
        const cartUpdated = cart.filter(producto => producto.id !== productoCod);
        setCart(cartUpdated);
    }

    const LimpiarCarrito = () => {
        setCart([]);
    }

    const EstaEnCarrito = (productoCod) => {
        return cart.some(producto => producto.id === productoCod);
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, agregarProducto, QuitarProducto, LimpiarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}
