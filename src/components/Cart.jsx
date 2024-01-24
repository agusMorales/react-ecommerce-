import React from "react";
import { Button, Box, Center, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import Form from "./form";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);

  return (
    <Center py={12} style={{ margin: "10px" }}>
      <Box>
        {!items.length ? (
          <h2>
            No tengo items{" "}
            <Link to="/">
              <Button> Ir al inicio</Button>
            </Link>
          </h2>
        ) : (
          <>
            <ul>
              {items.map((item, indx) => (
                <li
                  key={indx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width="50px"
                      height="auto"
                    />
                  </div>
                  <div>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text>
                      Cantidad: {item.quantity}{" "}
                      <Button
                        onClick={() => removeItem(item.id)}
                        colorScheme="red"
                        variant="outline"
                        marginLeft="10px"
                      >
                        Remover
                      </Button>
                    </Text>
                  </div>
                </li>
              ))}
            </ul>
            <h3 style={{ fontWeight: "bold" }}>
              Precio total = $
              {items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0)}
            </h3>
            <Link to="/cart/form">
  <Button>Finalizar compra</Button>
</Link>
          </>
        )}
        <div>
          <Button onClick={clear}>Limpiar carrito</Button>
        </div>
      </Box>
    </Center>
  );
};

export default Cart;
