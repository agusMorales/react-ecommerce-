import React, { useState, useContext } from 'react';
import { Button, Box, Center, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import CartContext from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const { id, price, title, img } = item;
  const [counter, setCounter] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    console.log(`Items  ${count}`);
    setCounter(count);
    addItem(item, count);
  };

  return (
    <Center py={12}>
      <Box textAlign="center">
        <Heading as="h1">{title} - {id}</Heading>
        <Image src={img} alt={title} mt={4} />
        <Heading as="h2" mt={4}>Precio: {price}</Heading>
        {counter !== 0 && (
          <Link to="/Cart">
            <Button mt={4}>Ver carrito</Button>
          </Link>
        )}
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </Box>
    </Center>
  );
};

export default ItemDetail;