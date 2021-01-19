
import {Flex, Skeleton, Button} from "@chakra-ui/react";


export default function Buttons(props) {
   

    return (
      
        <Flex w='100%' justifyContent="center">
            <Skeleton isLoaded={props.isloaded}  m="20px" w="100px" h="30px" borderRadius="10px" >
            <Button colorScheme="blue" >Visitar</Button>
            </Skeleton>
            <Skeleton isLoaded={props.isloaded}  m="20px" w="100px" h="30px" borderRadius="10px" >
            <Button colorScheme="red">Ver Vídeo</Button>
            </Skeleton>
        </Flex>
      
       
    )
  }