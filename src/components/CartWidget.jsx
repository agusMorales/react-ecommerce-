import React, { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';

const CartWidget = () => {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StarIcon />
      <small style={{ marginLeft: '0.5rem' }}>{contador}</small>
    </div>
  );
}

export default CartWidget;