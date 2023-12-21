import React from "react";
import { Card, CardBody, Stack, Heading , Text , Divider , CardFooter, ButtonGroup,Button , Image} from "@chakra-ui/react";

const Item = ({titulo , descripcion , precio}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Heading size="md">{titulo}</Heading>
        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Stack mt="6" spacing="3">
          <Text>{descripcion}</Text>
          <Text color="blue.600" fontSize="2xl">
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" className="buy">
            Buy now
          </Button>
          <Button variant="ghost" className="addCart">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item