import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      {productos.map((p, index) => (
        <Box key={index} mx={60}>
          <Item
            titulo={p.titulo}
            descripcion={p.descripcion}
            precio={p.precio}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default ItemList;