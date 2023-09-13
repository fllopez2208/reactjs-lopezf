import { Timestamp, writeBatch, addDoc, collection, documentId, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/firebase/FirebaseConfig";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import loadingGif from './loading.gif'
import { Link } from "react-router-dom"
import { MdCottage, MdHomeFilled, MdList } from 'react-icons/md'
import Swal from 'sweetalert2'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, LimpiarCarrito } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const id = cart.map(prod => prod.id)

            const productsRef = collection(db, 'Productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', id)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length=== 0 ) {
                await batch.commit()

                const orderRef = collection (db, 'Ordenes')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)

                LimpiarCarrito()


            } 

        }  finally {
            setLoading(false)
        }
    }

    if (loading) {

        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <img src={loadingGif} alt="Cargando..." className="w-1/2 max-w-md" />
            <p className="p-4 m-4 text-center text-white text-4xl">Se está generando su pedido...</p>
          </div>
        );
    }

    
      
    if (orderId) {
        
        
        Swal.fire({
          icon: 'success',
          title: 'Pedido Generado',
          text: `Se ha generado su pedido con id: ${orderId}`,
        })
       
        
        
        return (
            <div>
                <h3 className="text-white text-2xl font-semibold p-4 m-4"> Recibimos tu pedido! Nos contactaremos con vos para realizar la entrega de los productos. Recordá revisar el correo no deseado.</h3>
                <Link to='/Todos' className="p-4 m-4 Button bg-black border border-white text-white hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded"> <MdList className="inline text-lg mr-1" />Ver todos los productos</Link>
                <Link to='/' className="p-4 m-4 Button bg-black border border-white text-white hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded"><MdHomeFilled className="inline text-2xl mr-1" /> Home </Link>
            </div>
        )
        
    }

     
      
    return (
        <div>
            <h3 className="text-white text-center text-4xl font-bold p-4 m-4">A continuación, completá con tus datos de contacto para finalizar tu pedido:</h3>

            <CheckoutForm onConfirm={createOrder}/>

            <Link to='/' className="Button m-4 p-4 bg-black border border-white hover:bg-blue-800 text-white font-semibold text-lg py-2 px-2 mt-4 rounded-md">  <MdCottage className="inline text-xl mr-1" />Volver al Inicio</Link>
        </div>
        )

    
}

export default Checkout