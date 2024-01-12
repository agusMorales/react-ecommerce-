import React from 'react'
import { Button, Box, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useState , useContext} from 'react';
import ItemCount from './ItemCount';
import CartContext from '../context/CartContext';


const ItemDetail = ({item}) => {
    const {id, price, title, img} = item;
    const [counter, setCounter] = useState(0);

    const {addItem}= useContext(CartContext);



    const onAdd = (count) => {
      console.log(`Items  ${count}`);
      setCounter(count)
      addItem(item, count);


    }
  
    return (

      <Center py={12} style={{margin:"10px"}}>
        <Box>
          <h1 style={{marginLeft:"220px"}}>{title} - {id}</h1>
          <img src={img}></img> 
          <h2 style={{marginLeft:"320px"}}>{price}</h2> 
          {counter !== 0 &&   //renderizado condicional
            <Link to="/Cart"><Button  style={{marginLeft:"265px"}} >Finalizar compra</Button></Link>}
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
      
        </Box>
      </Center>

    )
  }
  



export default ItemDetail