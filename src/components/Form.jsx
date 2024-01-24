import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    postalCode: '',
    country: '',
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      postalCode: '',
      country: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      postalCode: '',
      country: '',
    });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name"
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name"
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Postal code</FormLabel>
            <Input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              placeholder="Postal code"
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Select country"
              required
            >
              {/* Aquí puedes agregar todas las provincias de Argentina */}
              <option>Buenos Aires</option>
              <option>Córdoba</option>
              {/* ... otras provincias */}
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="green" marginTop="10px">
            Enviar
          </Button>
          <Button colorScheme="red" marginTop="10px" onClick={handleCloseForm}>
            Cancelar
          </Button>
        </form>
    </div>
  );
};

export default Form;