import React from 'react'
import { Button, Box, Center } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Cart = () => {
    const { items, removeItem, clear } = useContext(CartContext);

    return (
        <Center py={12} style={{margin: "10px"}}>
        <Box>
    
        {!items.length ? <h2> No tengo items <Link to="/"><Button> Ir al inicio</Button></Link></h2>:
            <>
            <ol>
                {items.map(((item, indx) => <li key={indx}>{item.title} - {item.quantity} <Button onClick={()=> removeItem(item.id)}>Remover</Button></li>))}
            </ol>
            <h3>precio total = ${items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)}</h3>
            </>
        }
            <div>
                <Button onClick={clear}>Limpiar carrito</Button>
            </div>
        </Box>

        </Center>
       
    )
}


export default Cart