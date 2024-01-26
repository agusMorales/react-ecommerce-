


import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    CodigoPostal: '',
    Provincia: '',
  });

  const firestore = getFirestore();

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      nombre: '',
      apellido: '',
      direccion: '',
      email: '',
      CodigoPostal: '',
      Provincia: '',
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'usuarios'), formData);
      console.log('Documento añadido con ID: ', docRef.id);
      setFormData({
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
        CodigoPostal: '',
        Provincia: '',
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error al añadir documento: ', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ margin: '30px', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleFormSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <FormControl isRequired  marginBottom="20px">
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            required
            border="1px solid black"
          />
        </FormControl>

        <FormControl isRequired  marginBottom="20px">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
            placeholder="Apellido"
            required
            border="1px solid black"
          />
        </FormControl>

        <FormControl isRequired  marginBottom="20px">
          <FormLabel>Dirección</FormLabel>
          <Input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            placeholder="Dirección"
            required
            border="1px solid black"
          />
        </FormControl>

        <FormControl isRequired  marginBottom="20px">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            border="1px solid black"
          />
        </FormControl>

        <FormControl isRequired  marginBottom="20px">
          <FormLabel>Código Postal</FormLabel>
          <Input
            type="text"
            name="CodigoPostal"
            value={formData.CodigoPostal}
            onChange={handleInputChange}
            placeholder="Código Postal"
            required
            border="1px solid black"
          />
        </FormControl>

        <FormControl isRequired >
          <FormLabel>Provincia</FormLabel>
          <Select
            name="Provincia"
            value={formData.Provincia}
            onChange={handleInputChange}
            placeholder="Selecciona la Provincia"
            required
             border="1px solid black"
          >
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Ríos">Entre Ríos</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquén">Neuquén</option>
            <option value="Río Negro">Río Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Santiago del Estero">Santiago del Estero</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Tucumán">Tucumán</option>
          </Select>
        </FormControl>


        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button type="submit" colorScheme="green" marginRight="10px">
            Enviar
          </Button>
          <Button colorScheme="red" onClick={handleCloseForm}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
