import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';  // Asegúrate de importar el componente Cart

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ChakraProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar onCategoryChange={(category) => setSelectedCategory(category)} />
          <Routes>
            <Route path="/" element={<ItemListContainer selectedCategory={selectedCategory} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categoryId" element={<ItemListContainer selectedCategory={selectedCategory} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;