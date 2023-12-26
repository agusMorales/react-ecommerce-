import React from 'react';
import { Flex, Box, Spacer, Menu, MenuButton, MenuItem, MenuList, Avatar, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';  // Cambia aquí de RouterLink a Link
import CartWidget from './CartWidget';

const NavBar = () => {
  const fakeStoreCategories = ["all", "electronics", "men's clothing", "jewelery", "women's clothing"];

  return (
    <>
      <Flex bg="#001428" p="4" color="white">
        <Menu>
          <MenuButton fontWeight="bold" color="#c6c6c6">
            Categories
          </MenuButton>
          <MenuList>
            {fakeStoreCategories.map((category, index) => (
              <Link to={`/category/${category}`} key={index}>
                <MenuItem color="#c666c6" fontWeight="bold">
                  {category}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
        <Avatar src="https://via.placeholder.com/150" alt="User" mr="2" />
        <Text>John Doe</Text>
      </Flex>
    </>
  );
};

export default NavBar;
