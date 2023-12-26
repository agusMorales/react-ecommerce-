import {React, useEffect, useState } from 'react'
import { Button, Stack, Alert, AlertIcon } from '@chakra-ui/react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const alertAgregadoAlCarrito = () => {
    <Stack spacing={3}>
      
      <Alert status='success'>
        <AlertIcon />
          Se han agregado {contador} productos al carrito!
      </Alert>

    </Stack>
    }

    const sumar = () => {
      if (contador < 10) {
        setContador(contador + 1)
      } 
    }

    const restar = () => {
      if (contador > 0) {
        setContador(contador - 1)
      } 
    }

  return (
    <div>

        <Button colorScheme='teal' size='xs' onClick = {restar}>-</Button>

        <p>{contador}</p>

        <Button colorScheme='teal' size='xs' onClick = {sumar}>+</Button>

        <Button onClick = {alertAgregadoAlCarrito} >Agregar al carrito</Button>

    </div>


  )
}

export default ItemCount