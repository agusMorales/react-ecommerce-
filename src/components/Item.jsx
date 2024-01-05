import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='green'>
              <p>Producto: {producto.title}</p>
              <Image src={producto.imagen} fallbackSrc='https://via.placeholder.com/150' alt={producto.nombre} />
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={`/itemDetail/${producto.id}`}>
            <Button>más detalles</Button>
          </Link>
        </CardFooter>
        <Divider />
      </Card>
    </div>
  );
};

export default Item;