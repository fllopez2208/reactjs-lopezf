import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='CartWidget relative' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <div className="flex items-center">
                <MdShoppingCart className="text-white text-5xl mr-2 cart-icon" /> 
                {totalQuantity > 0 && (
                    <span className="bg-red-500 text-white px-2 rounded-full text-s font-semibold absolute -top-2 -right-2">
                        {totalQuantity}
                    </span>
                )}
            </div>
        </Link>
    );
    
};

export default CartWidget;
