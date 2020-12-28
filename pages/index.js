import {Box,Grid,GridItem,Flex} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import Head from 'next/head';


import Thumbnailske from '../components/temp_thumbnail';
import Thumbnail from '../components/thumbnail';
import SpotLight from '../components/spotlight';
import Buttons from '../components/buttons';
import Channelspotlight from "../components/channelspotolight";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react"
import Navmenu from "../components/navmenu";



export default function home(props){
  const [isloaded,setisloaded] = useState(false);
  const [Videos,setisvideos] = useState([]);


useEffect(()=>{  

 const videos = []
  console.log(props.LV.length)
  for(let x=0;x<props.LV.length;x++){
  videos.push(<Thumbnail isloaded={true} user={props.LV[x].PostedBy} title={props.LV[x].Name} img={props.LV[x].Thumbnail} link={`watch/${props.LV[x]._id}`} category="Testes"></Thumbnail>)
  }
  setisloaded(true);
  setisvideos(videos);

},[isloaded]);


return (
     
        <Grid
        h="100vh"
        templateColumns="200px 1fr 60px"
        templateRows="50px 1fr"
        templateAreas={['"navmenu navmenu  navmenu""content content content"','"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"']}
        >
         
      
      
<Head>
      <title>Skap</title>
      
</Head>
<Tabs w="100vw" variant="solid-rounded" align="center" colorScheme="blue">
<Navmenu navmenu={true}></Navmenu>


     <GridItem
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="50px"
     >
        <Box as={Flex} justifyContent="space-between" bg="black" w="100%">
          {/* <Flex alignItems="center" m="20px">
          <Avatar size="xl"></Avatar>
          <Heading ml="20px">Nome do canal Aqui</Heading>
          </Flex> */}
          <Channelspotlight></Channelspotlight>
          <Flex flexDirection="column">
          <SpotLight></SpotLight>
          {/* <Flex  w='100%' justifyContent="center">
          <Button m="20px" bg={"gray.600"} _hover={{bg:"gray.900"}}>Visitar</Button>
          <Button m="20px" bg={"blue.600"} _hover={{bg:"blue.900"}}>Assistir</Button>  
          </Flex>       */}
          <Buttons></Buttons>
          </Flex>
        </Box>
        <TabPanels>
        <TabPanel>
        
        <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="50px">
        {Videos}
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>        
       </Box>
       </TabPanel>         

        <TabPanel>
        <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="50px">
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>

        </Box>
        </TabPanel>

        <TabPanel>
        <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="50px">
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        <Thumbnailske isloaded={isloaded}></Thumbnailske>
        </Box>
        </TabPanel>
        </TabPanels>
        
     </GridItem>   
     </Tabs>

    </Grid>
    )

}