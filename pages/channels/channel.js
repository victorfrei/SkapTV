


import {Box,Grid, GridItem,} from "@chakra-ui/react";
import React from "react";
import Head from 'next/head';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;
import {Flex,} from "@chakra-ui/react"
//import {useRouter} from 'next/router';
import Channelspotlight from "../../components/channelspotolight";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Navmenu from "../../components/navmenu";

const alert = (data,status,duration,closable) =>{
  toast({
     description:data,
    status:status,
    duration: duration,
    position:"top",
    isClosable: closable
  })
return 0;
}





export default function channel(){
       

 // return (
         
    //         <Grid
    //         h="100vh"
    //         templateColumns="200px 1fr 60px"
    //         templateRows="50px 1fr"
    //         templateAreas={['"navmenu navmenu  navmenu""content content content"','"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"']}
    //         >
            
    //          <Head>
    //         <title>Skap- Channel {Owner}</title>
    //         </Head>
    
    //         <Tabs w="100vw" variant="solid-rounded" align="center" colorScheme="blue">
    //         <Navmenu navmenu={false}></Navmenu>
    
    
    
    
    //      <GridItem
    //       gridArea="content"
    //       display="flex"
    //       flexWrap="wrap"
    //       width="100%"
    //       justifyContent="center"
    //       mt="40px"
    //      >
    //         <Box as={Flex} justifyContent="space-between" bg="black" w="100%">
    //           <Channelspotlight isloaded={isloaded} name={Owner} ></Channelspotlight>
    //         </Box>

    //         <Tabs variant="solid-rounded" m="20px" colorScheme="blue">
    //         <TabList >
    //         <Tab>Ínicio</Tab>
    //         <Tab>Em Alta</Tab>
    //         <Tab>Recentes</Tab>
    //         </TabList>

    //         <TabPanels>
    //         <TabPanel>
    //             <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
              
                        
    //             </Box>
                
    //         </TabPanel>
    //         <TabPanel>
    //             <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                
    //             </Box>
                
    //         </TabPanel>
    //         <TabPanel>
    //             <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
    //             </Box>
    //         </TabPanel>
    //         </TabPanels>
    //         </Tabs>
                  
      
    //      </GridItem>   
    //      </Tabs> 
    
    //     </Grid>
    //     )

  return (
    <Grid
            h="100vh"
            templateColumns="200px 1fr 60px"
            templateRows="50px 1fr"
            templateAreas={['"navmenu navmenu  navmenu""content content content"','"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"']}
            >
            
             <Head>
            <title>Skap - Channel</title>
            </Head>
    
            <Tabs w="100vw" variant="solid-rounded" align="center" colorScheme="blue">
            <Navmenu navmenu={false}></Navmenu>
    
    
    
    
         <GridItem
          gridArea="content"
          display="flex"
          flexWrap="wrap"
          width="100%"
          justifyContent="center"
          mt="40px"
         >
            <Box as={Flex} justifyContent="space-between" bg="black" w="100%">
              <Channelspotlight></Channelspotlight>
            </Box>

            <Tabs variant="solid-rounded" m="20px" colorScheme="blue">
            <TabList >
            <Tab>Ínicio</Tab>
            <Tab>Em Alta</Tab>
            <Tab>Recentes</Tab>
            </TabList>

            <TabPanels>
            <TabPanel>
                <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>          
                </Box>
                
            </TabPanel>
            <TabPanel>
                <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                </Box>
                
            </TabPanel>
            <TabPanel>
                <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                <Thumbnailske></Thumbnailske>
                </Box>
            </TabPanel>
            </TabPanels>
            </Tabs>
                  
      
         </GridItem>   
         </Tabs> 
    
        </Grid>
  )
   
}