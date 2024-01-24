import React from 'react';
import Item from './Item';

import { Grid , GridItem } from '@chakra-ui/react';

const ItemList =({items}) => {
    return (

        <Grid templateColumns='repeat(3,1fr)' gap={4} bg='black.200'>

            {items.map((item,indx)=>
                <Item key={indx} id={item.id} title={item.title} price={item.price} img={item.img}/>
        
        )}

        

        </Grid>
    );
}



export default ItemList