import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const { id } = useParams();

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.image}
          alt={product.title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>
            Category: {product.category}
            Id: {id}
          </Text>
          <Text>
            {product.description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <ItemCount />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;