import {Box,Grid,GridItem,Flex, Spinner, SimpleGrid, Image, Text, Avatar, Button, Heading, Tooltip, Link} from "@chakra-ui/react";
import React from "react";
import Navmenu from "../components/navmenu";
import Sidebar from "../components/sidebar";
import {useSession} from 'next-auth/client'


export default function Home(){

 const [session,loading] = useSession();

return (<>
     
        <Grid

        h="100vh"
        templateColumns="200px 1fr"
        templateRows="50px 1fr"
        templateAreas={'"side nav""side content"'}
        >
         
       

<Navmenu></Navmenu>
<Sidebar></Sidebar>

     <Flex
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="50px"
     >
       <Heading>Olá,{session.user.name}</Heading>
       
        
     </Flex>   
     </Grid>
    
   
    </>


    )

    

}