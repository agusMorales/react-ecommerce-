import React from 'react';
import { useState } from 'react';
import { Box, Center, Button } from '@chakra-ui/react';

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Center py={12} style={{ margin: '10px' }}>
      <Box display="flex" flexDirection="column" alignItems="center">

        <Box display="flex" alignItems="center" marginBottom="10px">
          <Button
            colorScheme='red'
            onClick={decreaseCounter}
            disabled={counter === initial}
          >
            -
          </Button>
          <div style={{ marginLeft: '5px', marginRight: '5px' }}>Cantidad: {counter}</div>
          <Button
            colorScheme='green'
            onClick={() => setCounter(counter + 1)}
            disabled={counter === stock}
          >
            +
          </Button>
        </Box>
        
        <Box marginTop="10px">
          <Button colorScheme='blue' onClick={() => onAdd(counter)} disabled={counter === 0}>
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default ItemCount;