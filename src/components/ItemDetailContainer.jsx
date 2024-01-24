import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const {id} =useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    const oneItem = doc(db,'ropa',`${id}`)
    getDoc(oneItem).then((snapshot)=>{

      if (snapshot.exists()){
        const doc= snapshot.data()
      console.log();
      setItem(doc)
      }
    })
  },[])

return (
  <div>
    <ItemDetail item={item}/>
  </div>

)
}



export default ItemDetailContainer