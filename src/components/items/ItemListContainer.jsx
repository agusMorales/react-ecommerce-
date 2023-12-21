import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  // Accede a las props recibidas

  const productos = [

    { titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000 },
  
    { titulo: "Producto B", descripcion: "descripcion de producto B", precio: 2000 },
  
    { titulo: "Producto C", descripcion: "descripcion de producto C", precio: 3000 }
  
  ]
  
  const mostrarPorductos= new Promise((resolve, reject) => {
    if(productos.length <0){
      setTimeout (() => {
        resolve(productos)
      }, 2000)
    }else{
      reject("No se obtuvieron los productos")
    }
  })

  mostrarPorductos
      .then((resultdo)=>{
        console.log(resultdo)
      })
      .catch((error)=>{
        console.log(error);
      })

  return (
  
      
      <div >
        <ItemList productos={productos}/>     
      </div>
    
  );
};

export default ItemListContainer;




