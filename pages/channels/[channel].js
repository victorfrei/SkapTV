


    import {Box,Grid, GridItem,useColorMode,} from "@chakra-ui/react";
    import React, { useState} from "react";
    import Head from 'next/head';
    
    
    import {
      Flex,
    } from "@chakra-ui/react"
    
      
    import {useRouter} from 'next/router';
    import {useEffect} from 'react';
    import Axios from "axios";
    import Thumbnailske from '../../components/thumbnail';
    import Channelspotlight from "../../components/channelspotolight";
    import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from "@chakra-ui/react"
    import Navmenu from "../../components/navmenu";




    export default function channel(){
    const [channelinfo,setchannelinfo] = useState([]);
    const [videos,setvideos] = useState([]);
    const [isloaded,setisloaded] = useState(false);
    const router = useRouter();
    const toast = useToast();
    
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
  
        
    
      
    useEffect(()=>{
      
          
          if(window.location.search.split("=")[1]!=undefined){
          Axios.post(`/api/channels/${window.location.search.split("=")[1].toString()}`)
          .then(data=>{
            if(data.data =="O canal não foi encontrado!"){
              alert("O canal não foi encontrado!!","error",8000,true);
              router.replace("/");
            }else{
            setchannelinfo(JSON.stringify(data.data.Channel));
            setvideos(JSON.parse(data.data.Videos))
            console.log(data);
            console.log(channelinfo);
            console.log(videos)
            setTimeout(() => {
              setisloaded(true);
            }, 2000);
            
            }
          })
        }else{
          alert("O canal não foi encontrado!!","error",8000,true);
          router.replace("/");
        }
           
      

        
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
              <Channelspotlight isloaded={isloaded} name="testes" ></Channelspotlight>
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
                <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                
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