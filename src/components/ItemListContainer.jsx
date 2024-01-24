import React, { useState, useEffect } from 'react';
import { SimpleGrid, Box, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryid } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'ropa');

      let itemsData;

      if (categoryid === undefined) {
        const snapshot = await getDocs(itemsCollection);
        itemsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      } else {
        const categoryQuery = query(itemsCollection, where('marca', '==', categoryid));
        const snapshot = await getDocs(categoryQuery);
        itemsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      }

      setItems(itemsData);
    };

    fetchData();
  }, [categoryid]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;