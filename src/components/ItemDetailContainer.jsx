import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const productoSeleccionado = productos.find((p) => p.id == id);

  return (
    <div>
      {productoSeleccionado && <ItemDetail maceta={productoSeleccionado} />}
    </div>
  );
};

export default ItemDetailContainer;