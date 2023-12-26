import React from "react";
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image } from "@chakra-ui/react";


        
        const ItemList = ({ title, description, price }) => {
          return (
            <Card maxW="sm" textAlign="center" borderWidth="1px" borderRadius="md" overflow="hidden" minH="300px">
              <CardBody>
                <Heading size="md">{title}</Heading>
                <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/150"
          alt="Product Image"
          boxSize="150px"
          objectFit="cover"
          borderRadius="md"
          mx="auto" // Centra la imagen horizontalmente
        />
                <Stack mt="6" spacing="3">
                  <Text>{description}</Text>
                  <Text color="blue.600" fontSize="2xl" fontWeight="bold">
                    {price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider borderColor="gray.200" />
              <CardFooter>
                <ButtonGroup spacing="2" justifyContent="center">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        };
        
        export default ItemList;