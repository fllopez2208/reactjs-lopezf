import { Link } from "react-router-dom"
import { MdManageSearch } from 'react-icons/md'


const Item = ({id, Nombre, Imagen, Precio, stock}) => {

    return (
        <div className="Container inline-block">
            <div className="CardItem bg-white space-x-4 p-3 m-3 rounded-lg shadow-md border border-gray-200">
                    <h2 className="ItemHeader text-black text-lg font-bold mb-2">
                        {Nombre}
                    </h2>

                    <img src={Imagen} alt={Nombre} className="ItemImg object-center object-cover mb-2" />
                    
        
                    <p className="Info text-black text-m font-semibold">
                        Precio: ${Precio}
                    </p>
                    <p className="Info text-black text-sm p-2 mb-2">
                        Stock Disponible: {stock}
                    </p>
                    <Link to={`/Item/${id}`} className="Button bg-white border border-grey text-black hover:bg-blue-400 hover:text-white font-semibold py-2 px-4 rounded"> <MdManageSearch className="inline-block text-xl mr-1 text-center" />Ver Detalle</Link>

            </div>
            
        </div>
    )
}

export default Item