import {Box,Grid,GridItem,Flex, Spinner, SimpleGrid, Image, Text, Avatar, Button, Heading, Tooltip, Link, HStack} from "@chakra-ui/react";
import React from "react";
import Navmenu from "../components/navmenu";
import {useSession} from 'next-auth/client'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react"

export default function Home(){

 const [session,loading] = useSession();

return (<>
     
        <Grid

        h="100vh"
        templateColumns="1fr"
        templateRows="70px 1fr"
        templateAreas={'"nav""content"'}
        >
         
       

<Navmenu></Navmenu>


     <Flex
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="50px"
     >
       {session &&
       <Flex w="100%" m="0 40px" flexDirection="column">
       <Heading m="10px 0">Olá, {session.user.name}!</Heading>

      <HStack>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Início</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Cursos</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Categorias</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Aulas</TagLabel>
       </Tag>
       </HStack>









       </Flex>
       }
     </Flex>   
     </Grid>
    
   
    </>


    )

    

}