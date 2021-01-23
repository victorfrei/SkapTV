import {Box,Grid,GridItem,Flex, Spinner, SimpleGrid, Image, Text, Avatar, Button, Heading, Tooltip} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import Thumbnailske from '../components/temp_thumbnail';
import Thumbnail from '../components/thumbnail';
import SpotLight from '../components/spotlight';
import Buttons from '../components/buttons';
import Channelspotlight from "../components/channelspotolight";
import { Tabs, TabPanels, TabPanel } from "@chakra-ui/react"
import Navmenu from "../components/navmenu";
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/client';
import Axios from "axios";

export async function getVideos(amount){
  console.log(process.env.NEXTAUTH_URL)
  const videos = await Axios.post("/api/v2/users/videos",{amount});
  const Content =[];
 
  // for(let x=0;videos.data.length;x++){

  // <Box w="300px" h="350px">
  //       <Image borderRadius="10px" w="100%" h="50%" src="/icons/bannertest.jpg"></Image>
  //       <Tooltip bg="white" label=" Nome do video que pode ser mais logo 
  //         do que o imaginado por mim, já pensou nisso!">
  //       <Heading isTruncated fontSize="15px" m="5px" noOfLines={2}>
  //         Nome do video que pode ser mais logo 
  //         do que o imaginado por mim, já pensou nisso!
  //       </Heading>
  //       </Tooltip>
  //       <Flex p="10px" justifyContent="space-between" alignItems="center">
  //       <Avatar size="md" name="Skap"></Avatar>
  //       <Text mr="15px">Skap Streaming</Text>
  //       <Button colorScheme="red" size="sm">Inscrever-se</Button>
  //       </Flex>
  //       </Box>
  // }


  return {Videos:videos}
 
};



 



export default function Home(props){
  const [videos,setvideos] = useState([]);
  const [hascontent,sethascontent] = useState(false);
  const router = useRouter();
  const [session,loading] = useSession();

  useEffect(()=>{
    async ()=>{
    console.log(await getVideos(2))
    }
  })



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
        <Box w="300px" h="350px">
        <Image borderRadius="10px" w="100%" h="50%" src="/icons/bannertest.jpg"></Image>
        <Tooltip bg="white" label=" Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!">
        <Heading isTruncated fontSize="15px" m="5px" noOfLines={2}>
          Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!
        </Heading>
        </Tooltip>
        <Flex p="10px" justifyContent="space-between" alignItems="center">
        <Avatar size="md" name="Skap"></Avatar>
        <Text mr="15px">Skap Streaming</Text>
        <Button colorScheme="red" size="sm">Inscrever-se</Button>
        </Flex>
        </Box>
        <Box w="300px" h="350px">
        <Image borderRadius="10px" w="100%" h="50%" src="/icons/bannertest.jpg"></Image>
        <Tooltip bg="white" label=" Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!">
        <Heading isTruncated fontSize="15px" m="5px" noOfLines={2}>
          Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!
        </Heading>
        </Tooltip>
        <Flex p="10px" justifyContent="space-between" alignItems="center">
        <Avatar size="md" name="Skap"></Avatar>
        <Text mr="15px">Skap Streaming</Text>
        <Button colorScheme="red" size="sm">Inscrever-se</Button>
        </Flex>
        </Box>
        <Box w="300px" h="350px">
        <Image borderRadius="10px" w="100%" h="50%" src="/icons/bannertest.jpg"></Image>
        <Tooltip bg="white" label=" Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!">
        <Heading isTruncated fontSize="15px" m="5px" noOfLines={2}>
          Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!
        </Heading>
        </Tooltip>
        <Flex p="10px" justifyContent="space-between" alignItems="center">
        <Avatar size="md" name="Skap"></Avatar>
        <Text mr="15px">Skap Streaming</Text>
        <Button colorScheme="red" size="sm">Inscrever-se</Button>
        </Flex>
        </Box>
        <Box w="300px" h="350px">
        <Image borderRadius="10px" w="100%" h="50%" src="/icons/bannertest.jpg"></Image>
        <Tooltip bg="white" label=" Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!">
        <Heading isTruncated fontSize="15px" m="5px" noOfLines={2}>
          Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!
        </Heading>
        </Tooltip>
        <Flex p="10px" justifyContent="space-between" alignItems="center">
        <Avatar size="md" name="Skap"></Avatar>
        <Text mr="15px">Skap Streaming</Text>
        <Button colorScheme="red" size="sm">Inscrever-se</Button>
        </Flex>
        </Box>
        <Box w="300px" h="350px">
        <Image borderRadius="10px" w="100%" h="50%" src="/icons/bannertest.jpg"></Image>
        <Tooltip bg="white" label=" Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!">
        <Heading isTruncated fontSize="15px" m="5px" noOfLines={2}>
          Nome do video que pode ser mais logo 
          do que o imaginado por mim, já pensou nisso!
        </Heading>
        </Tooltip>
        <Flex p="10px" justifyContent="space-between" alignItems="center">
        <Avatar size="md" name="Skap"></Avatar>
        <Text mr="15px">Skap Streaming</Text>
        <Button colorScheme="red" size="sm">Inscrever-se</Button>
        </Flex>
        </Box>

        </SimpleGrid>
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center" mt="50px">
        {/* hidden={!hascontent} */}
        <Spinner hidden={hascontent} color="red.600" size="lg"/>
        </Flex>

       </TabPanel>         

        <TabPanel>
        {videos}
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center" mt="50px">
        <Spinner hidden={hascontent} color="red.600" size="lg"/>
        </Flex>

        </TabPanel>

        <TabPanel>
        {videos}
        <Flex w="100%" h="500px" justifyContent="center" alignItems="center" mt="50px">
        <Spinner hidden={hascontent} color="red.600" size="lg"/>
        </Flex>

        </TabPanel>
        </TabPanels>
        
     </GridItem>   
     </Tabs>

    </Grid>
    
   
    </>


    )

    

}