import React from 'react'
import {useState, createContext, children} from 'react';

export const CartContext = createContext();

export const CartProvider= ({children}) =>{
    const [items, setItems] = useState([]);


    const addItem =(item, quantity) => {
        console.log({ ...item, quantity });
        if (isInCart(item.id)) {
            let aux = items;  //copia del array
            let itemIndex = aux.findIndex((element) => element.id === item.id);
            console.log(`Mi index es ${itemIndex}`);
            aux[itemIndex].quantity += quantity;
            setItems([...aux]);
        } else {
            setItems([...items, { ...item, quantity }]);
        }
    }


    const removeItem = (itemId) => {
        setItems(items.filter((element) => element.id != itemId));
    }

    const clear =() =>{
        setItems([]);
    }

    const isInCart =(itemId) => {
        return items.find((element) => element.id == itemId);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, items, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContext