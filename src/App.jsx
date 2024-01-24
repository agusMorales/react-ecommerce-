import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart"; 
import Form from "./components/form";

const App = () => {
  const [selectedMarca, setSelectedMarca] = useState(null);

  const handleMarcaChange = (marca) => {
    setSelectedMarca(marca);
  };

  return (
    <ChakraProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar onMarcaChange={handleMarcaChange} />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer selectedMarca={selectedMarca} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/form" element={<Form />} />
            <Route
              path="/marca/:marcaId"
              element={<ItemListContainer selectedMarca={selectedMarca} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;
