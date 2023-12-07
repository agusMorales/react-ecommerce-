import React from 'react';
import CartWidget from './CartWidget';
import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Wrap,
  WrapItem,
  Avatar,
  Input,
} from '@chakra-ui/react';
import SearchBar from './SearchBar'; 
import './navbar.css';


const NavBar = () => {
  return (
    <>
      <Flex align="center" justify="space-between" className="navbar">
        <Menu>
          <MenuButton fontSize={"1rem"} color={"#FFFFFF"} borderRadius={""}  >
            Moviles
            <ChevronDownIcon boxSize={"1rem"} />
          </MenuButton>
          <MenuList className="dropdown-header">
            <MenuItem >Smartphone</MenuItem>
            <MenuItem >Tablets</MenuItem>
            <MenuItem >Watches</MenuItem>
            <MenuItem >Apps & Services</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
        <MenuButton fontSize={"1rem"} color={"#FFFFFF"} ml={"20"}  >
            Soporte
            <ChevronDownIcon boxSize={"1rem"} />
          </MenuButton>
          <MenuList color={"#001428"}>
            <MenuItem>Ayuda Con Mi Producto</MenuItem>
            <MenuItem>Reparacione y Garantía</MenuItem>
            <MenuItem>Contáctanos</MenuItem>
            <MenuItem>Informacion Adicional</MenuItem>
          </MenuList>
          </Menu>
        <SearchBar />
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;