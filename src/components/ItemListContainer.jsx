import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { SimpleGrid, Box, Center } from "@chakra-ui/react";

const ItemListContainer = ({ selectedCategory }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {productos.map((p, index) => (
  <Box key={index}>
    <ItemList
      title={p.title}
      description={p.description}
      price={p.price}
    />
  </Box>
))}
      </SimpleGrid>
    </Center>
  );
};

export default ItemListContainer;