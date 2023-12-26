import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Link} from '@chakra-ui/react'


const Item = ({img, titulo, precio, id}) => {
  return (
    <div className='divDeCards'>
        <Card maxW='sm' className='cards'>
            <CardBody className='cardBody'>
                
                    <Image
                    src= {img}
                    alt='maceta artesanal'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' className='tituloCards'>{titulo}</Heading>
                    <Text color='blue.600' fontSize='2xl' className='precioCards'>
                        {precio}
                    </Text>
                    </Stack>
                
            </CardBody>
            <Divider />
            
                <CardFooter className='divFooterCard'>
                    <ButtonGroup spacing='2'>
                        
                        <Button className='botonVerDetalles'>
                    
                            <Link to={`/item/${id}`}>
                                       
                                        Ver detalles
                                        
                            </Link>

                        </Button>
                        
                    </ButtonGroup>
                </CardFooter>
        </Card>
    </div>
  )
}

export default Item