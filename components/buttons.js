
import {Flex, Skeleton} from "@chakra-ui/react";


export default function Buttons() {
   

    return (
      
        <Flex w='100%' justifyContent="center">
            <Skeleton startColor="#6D5DD3" endColor="black.800" m="20px" w="100px" h="30px" borderRadius="10px" ></Skeleton>
            <Skeleton startColor="#6D5DD3" endColor="black.800" m="20px" w="100px" h="30px" borderRadius="10px" ></Skeleton>
        </Flex>
      
       
    )
  }