import { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const Sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const Restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="Counter flex justify-center flex-col items-center mt-5">
      <div className="Controls flex items-center space-x-2 mb-4">
        <button
          className="Button bg-white border border-grey text-black hover:bg-slate-400 hover:text-white font-bold py-2 px-4 rounded"
          onClick={Restar}
        >
          -
        </button>
        <h4 className="Number text-black font-bold">{cantidad}</h4>
        <button
          className="Button bg-white border border-grey text-black hover:bg-slate-400 hover:text-white font-bold py-2 px-4 rounded"
          onClick={Sumar}
        >
          +
        </button>
      </div>
      <div>
        <button
          className={`Button bg-white border border-grey text-black hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded ${
            stock ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          <MdShoppingCartCheckout className="inline-block text-xl mr-1 text-center" />{" "}
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
