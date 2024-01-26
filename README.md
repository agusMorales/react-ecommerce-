# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- ![GIF](https://github.com/agusMorales/react-ecommerce-/assets/108914743/3461c8c5-1a77-4a3b-8d96-fd664676f6d4)


Ecommerce de Ropa - README
Este repositorio contiene el código fuente . El proyecto está construido utilizando React.js y Firebase como base de dato, se proporciona una descripción detallada de la estructura y las principales características del proyecto.

Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

src: Carpeta principal que contiene todo el código fuente del frontend.
components: Contiene todos los componentes de React utilizados en el proyecto.
ItemListContainer: Componente que muestra una lista de productos.
ItemList: Componente que muestra una lista de elementos individuales.
Item: Componente que muestra un artículo específico con detalles.
ItemDetailContainer: Componente que muestra detalles específicos de un artículo.
ItemDetail: Componente que muestra los detalles de un artículo en particular.
Cart: Componente que muestra el carrito de compras.
CheckoutForm: Componente que muestra el formulario de checkout para finalizar la compra.
context: Contiene el contexto de la aplicación, como el contexto del carrito.
firebase: Contiene la configuración de Firebase y funciones de interacción con la base de datos.
App.js: Archivo principal que contiene la lógica de enrutamiento y la estructura general de la aplicación.
Características Principales
Listado de Productos: Utiliza ItemListContainer, ItemList, y Item para mostrar una lista de productos disponibles para la venta.
Detalles del Producto: Utiliza ItemDetailContainer y ItemDetail para mostrar información detallada de un producto específico.
Manejo del Carrito de Compras: Permite al usuario agregar productos al carrito y ajustar la cantidad utilizando ItemCount.
Formulario y Finalización de Compra: Al finalizar la compra, el usuario puede proceder al form, donde se muestra un formulario (Form) para ingresar la información de pago y envío.
Interacción con Firebase: Utiliza Firebase como base de datos para almacenar información sobre productos, carrito de compras y órdenes de compra.
