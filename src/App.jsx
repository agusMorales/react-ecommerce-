import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/navbar/navbar.jsx";
import ItemListContainer from "./components/items/ItemListContainer.jsx";

const App = () => {
  // Datos para NavBar
  const datosParaNavBar = {
    usuario: {
      nombre: "John Doe",
      avatar: "https://media.a24.com/p/26c1256595f8044daa8e68b085d13912/adjuntos/296/imagenes/008/768/0008768607/1200x675/smart/naruto-netflixjpg.jpg",
    },
    categorias: ["Electrónica", "Ropa", "Hogar"],
  };

  return (
    <>
      <ChakraProvider>
        <NavBar usuario={datosParaNavBar.usuario} />
      </ChakraProvider>
      <div className="contenedor-app">
        <ItemListContainer />
      </div>
    </>
  );
};

export default App;