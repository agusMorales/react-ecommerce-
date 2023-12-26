import React, { useState, useEffect } from 'react';
import { SimpleGrid, Box, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

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

  useEffect(() => {
    if (categoryId && productos.length > 0) {
      if (categoryId.toLowerCase() === 'all') {
        setProductosFiltrados(productos); // Mostrar todos los productos
      } else {
        const productosFiltrados = productos.filter((p) => p.category.toLowerCase() === categoryId.toLowerCase());
        setProductosFiltrados(productosFiltrados);
      }
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoryId, productos]);

  console.log("Productos Filtrados:", productosFiltrados);

  return (
    <Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {productosFiltrados.map((p, index) => (
          <Box key={index}>
            <ItemList title={p.title} description={p.description} price={p.price} />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default ItemListContainer;