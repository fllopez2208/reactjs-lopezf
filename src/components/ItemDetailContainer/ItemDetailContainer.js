import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import { db } from '../../services/firebase/FirebaseConfig'


const ItemDetailContainer  = () => {
  
  const [producto, setProducto] = useState(null)
  
  const {productCod} = useParams()

  useEffect(()=> {
  
    const docRef = doc(db, 'Productos', productCod)

    getDoc(docRef)
    .then(response => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data }
        
      setProducto(productsAdapted)
    })
    
    
  },[productCod])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer