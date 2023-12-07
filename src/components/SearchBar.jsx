import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        ml="250"
        children={<SearchIcon color="gray.300" />}
      />
       <Input 
        type="text"
        placeholder="Buscar productos"
        width="300px"
        ml="250" // Ajusta el valor de marginRight según tus necesidades
      />
    </InputGroup>
  );
};

export default SearchBar;