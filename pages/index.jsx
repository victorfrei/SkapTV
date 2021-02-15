import {Grid,Flex, Spinner,Heading, HStack, Box,Image,Text, SimpleGrid, useColorModeValue} from "@chakra-ui/react";
import React from 'react';
import Navmenu from "../components/navmenu";
import {
  Tag,
  TagLabel,
} from "@chakra-ui/react"
import { getSession } from "next-auth/client";




Home.getInitialProps= async(ctx)=>{
  const res = getSession(ctx);
  return { session: await res }
}



export default function Home({session}){

 
return (<>
     
        <Grid
        h="100vh"
        templateColumns="100px 1fr"
        templateRows="70px 1fr"
        templateAreas={'"nav nav"". content"'}
        overflow="auto"
        >
         
       

<Navmenu></Navmenu>

     <Flex
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="30px"
     >
       
       
       <Flex w="100%" m="0 40px" flexDirection="column">
       {session && <>
       <Heading m="10px 0">Olá, {session.user.name}!</Heading>
       </>
       }
        <SimpleGrid mt="20px" columns={4} spacing={10}>
        
       <Box  w="300px" h="300px" bg={useColorModeValue("#1A202C","#E4E8F1")} boxShadow={useColorModeValue("0 4px 8px 0 rgba(0, 0, 0, 0.8)","0 4px 8px 0 rgba(255, 255, 255, 0.5)")}  padding="5px">
        <Flex w="100%" flexDir="column" color={useColorModeValue("white","black")} padding="5px">
        <Image src="/lr/1.jpg"></Image>
        <Text noOfLines={2} textAlign="start"> Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor</Text>
        <Flex justify="flex-start" h="100%" justifyContent="center" alignItems="center" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>

      </SimpleGrid>








       </Flex>
       
     </Flex>   
     </Grid>
    
   
    </>


    )}

    



