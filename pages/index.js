import {Box,Grid,GridItem,Flex, Spinner, SimpleGrid, Image, Text, Avatar, Button, Heading, Tooltip, Link} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import SpotLight from '../components/spotlight';
import Buttons from '../components/buttons';
import Channelspotlight from "../components/channelspotolight";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react"
import Navmenu from "../components/navmenu";
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/client';
import Axios from "axios";

export async function getVideos(amount){
  const videos = await Axios.post("/api/v2/users/videos",{amount});
  const Content =[];
  console.log(videos.data);
  for(let x=0;x<videos.data.length;x++){
  Content.push(
  <Box w="300px" h="350px">
        <Link href={`/watch/${videos.data[x].spS_Thumbnail}`}><Image borderRadius="10px" w="100%" h="50%" src={`https://image.mux.com/${videos.data[x].spS_Thumbnail}/thumbnail.png?width=214&height=121&fit_mode=pad`}></Image></Link>
        <Tooltip bg="white" label={videos.data[x].spS_Nome}>
        <Heading isTruncated fontSize="16px" textAlign="start" m="5px 20px" noOfLines={2}>
        {videos.data[x].spS_Nome}
        </Heading>
        </Tooltip>
        <Flex p="10px" justifyContent="space-between" alignItems="center">
        <Avatar size="md" name={videos.data[x].spS_PostedBy} src={videos.data[x].spS_Thumbnail}></Avatar>
        <Text mr="15px">{videos.data[x].spS_PostedBy}</Text>
        <Button colorScheme="blue" size="sm">Seguir</Button>
        </Flex>
        </Box>
  )
  }


  return Content
 
};



 



export default function Home(){
  const [videos,setvideos] = useState([]);
  const [hasloading,sethasloading] = useState(false);
  const router = useRouter();
  const [session,loading] = useSession();

  useEffect(()=>{
    async function Videos(){
    console.log(await getVideos(2))
    setvideos(await getVideos(8));
    }
    Videos();
  },[router.pathname])



return (<>
     
        <Grid

        h="100vh"
        templateColumns="200px 1fr 60px"
        templateRows="50px 1fr"
        templateAreas={['"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"']}
        >
         
       
      
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
       
        <Box as={Flex} justifyContent="space-between" borderRadius="50px" m="10px 20px" backgroundImage='url("/icons/bannertest.jpg")' backgroundSize="cover" backgroundRepeat="no-repeat"  backgroundPosition="center" w="100%">
          
          <Channelspotlight name="Skap"></Channelspotlight>
          <Flex flexDirection="column">
          <SpotLight ></SpotLight>
          
          <Buttons ></Buttons>
          </Flex>
        </Box>
        <TabPanels>
        <TabPanel>
               
        <SimpleGrid columns={4} spacing='10px' p="40px">
        {videos}

        </SimpleGrid>
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center" mt="50px">
        <Spinner hidden={hasloading} color="red.600" size="lg"/>
        </Flex>

       </TabPanel>         

        <TabPanel>
        {videos}
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center" mt="50px">
        <Spinner hidden={hasloading} color="red.600" size="lg"/>
        </Flex>

        </TabPanel>

        <TabPanel>
        {videos}
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center" mt="50px">
        <Spinner hidden={hasloading} color="red.600" size="lg"/>
        </Flex>

        </TabPanel>
        </TabPanels>
        
     </GridItem>   
     </Tabs>

    </Grid>
    
   
    </>


    )

    

}