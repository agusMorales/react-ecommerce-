import React from 'react';
import { Flex, Box, Spacer, Menu, MenuButton, MenuItem, MenuList, Avatar, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ onMarcaChange }) => {
  const marcas = ["all", "zara", "north face", "nike"];

  const handleMarcaClick = (marca) => {
    onMarcaChange(marca);
  };

  return (
    <>
      <Flex bg="#001428" p="4" color="white">
        <Spacer />

        <Menu>
          <MenuButton fontWeight="bold" color="#c6c6c6">
            Categorías
          </MenuButton>
          <MenuList>
            {marcas.map((marca, index) => (
              <Link to={`/marca/${marca}`} key={index}>
                <MenuItem
                  color="#c666c6"
                  fontWeight="bold"
                  onClick={() => handleMarcaClick(marca)}
                >
                  {marca}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>

        <Link to="/cart">
          <Box p="4">
            <CartWidget />
          </Box>
        </Link>
        
      </Flex>
    </>
  );
};

export default NavBar;