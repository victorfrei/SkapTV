


    import { Avatar,Alert,AlertIcon,useToast,Link, Badge,Button, Box,Grid, GridItem,useColorMode, MenuButton, Divider } from "@chakra-ui/react";
    import React, { useState} from "react";
    import Head from 'next/head';
    
    
    import {
      Menu,
      MenuList,
      MenuItem,
      MenuGroup,
     MenuDivider,
     Flex,
     Text,
     
    } from "@chakra-ui/react"
    
    import {
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      Heading
    } from "@chakra-ui/react"
    
    
    import Thumbnail from '../components/thumbnail';
    import {useRouter} from 'next/router';
    import {useEffect} from 'react';
    import {useDisclosure} from '@chakra-ui/react';
    import Axios from "axios";
    import logout from '../components/logout';
    import ModalComponent from '../components/modal';
    import Thumbnailske from '../components/thumbSke';
    import Channelspotlight from "../components/channelspotolight";
    import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Navmenu from "../components/navmenu";




    export default function channel(){
    const [channelinfo,setchannelinfo] = useState([]);
    const router = useRouter();
     
    
  
        
    
      
    useEffect(()=>{
      
      
          
        Axios.post("/api/verify",{key:localStorage.getItem("PublicKey")==null?"0001":localStorage.getItem("PublicKey")})
          
        .then((resp)=>{
        
        
    
        if(resp.data.valid == true){
          setNick(resp.data.values.data.Nick);
          setPlan("Standard");

          Axios.get(`/api/channels/${window.location.search.split("=")[1].toString()}`)
          .then(data=>{
            setchannelinfo(data);
            console.log(data);
            console.log(channelinfo);
            
          })
        }else {
          console.clear();
          alertW(resp.data.msg,8000,true);
          setTimeout(()=>{},1000);
          router.replace("/login");
        }
        })
    
      

        
    },[router.pathname]);
    
    
    
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
              {/* <Flex alignItems="center" m="20px">
              <Avatar size="xl"></Avatar>
              <Heading ml="20px">Nome do canal Aqui</Heading>
              </Flex> */}
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