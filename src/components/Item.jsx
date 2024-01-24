import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, img }) => {
  return (
    <Card maxW="250px" h="400px" border="1px" borderColor="gray.200" display="flex" flexDirection="column" justifyContent="space-between">
      <CardBody textAlign="center">
        <Stack mt="4" spacing="3">
          <Heading size="md" color="green" fontSize="sm" noOfLines={2} overflow="hidden">
            Producto: {title}
          </Heading>
          <Image
            src={img}
            alt={title}
            maxW="100%"
            maxH="150px"
            objectFit="cover"
            mx="auto"
            my="2"
          />
        </Stack>
      </CardBody>
      <CardFooter justifyContent="center">
        <Link to={`/item/${id}`}>
          <Button colorScheme="blue" maxW="100%" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            Más detalles
          </Button>
        </Link>
      </CardFooter>
      <Divider />
    </Card>
  );
};

export default Item;