import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/FirebaseConfig'
const ItemListContainer  = () => {
  
  const [products, setProducts] = useState([])
  
  const {productCat} = useParams()


  useEffect(()=> {
  
    const collectionRef = productCat
    ? query(collection(db, 'Productos'), where('Categoria', '==', productCat))
    : collection(db, 'Productos')

    getDocs(collectionRef)
    .then(response => {
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })
      setProducts(productsAdapted)
    })
    
  },[productCat])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )

   
}

export default ItemListContainer;

