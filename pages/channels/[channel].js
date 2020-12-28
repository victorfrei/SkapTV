


import {Box,Grid, GridItem,useColorMode,} from "@chakra-ui/react";
import React, { useState} from "react";
import Head from 'next/head';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
import {Flex,} from "@chakra-ui/react"
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import Thumbnailske from '../../components/thumbnail';
import Channelspotlight from "../../components/channelspotolight";
import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from "@chakra-ui/react"
import Navmenu from "../../components/navmenu";

export async function getStaticPaths() {
  return {paths:[],
  fallback:true
}
}

  

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


export async function getStaticProps({params}){

  const channelSchema = new Schema({
    Id: ObjectId,
    Name: String,
    Owner:String,
    Subs: Number,
    Follows: Number,
    Banner: String,
    Avatar: String,
    CreatedDate: {type:Date,default:Date.now},
    Layout: {type:Number,default:1},
    Verificado: Boolean,
    Color: String
  });

  const videoSchema = new Schema({
    Id: ObjectId,
    Name: String,
    Description: String,
    Categoria:String,
    Url:String,
    PostedDate: {type:Date,default:Date.now()},
    PostedBy:String,
    Likes: Number,
    Comments: {Amount: Number,Comments:Object},
    Dislikes: Number,
    Views: Number,
    });

const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
    useUnifiedTopology: true});
console.log("channel "+params.channel)
    const channel = conn.model("channels",channelSchema);
    const videos = conn.model("videos",videoSchema);
    const channelfound = await channel.findOne({_id:mongoose.Types.ObjectId(params.channel)})

    if(channelfound!=null){
    const {Owner} = channelfound;
    const videosfound = await videos.find({PostedBy:Owner});
    return({props:{infos:{Channel:JSON.stringify(channelfound),Videos:JSON.stringify(videosfound)}}});
    }else{
      return{props:{close:true}}
    }
}



export default function channel(props){
    const [isloaded,setisloaded] = useState(false);
    const router = useRouter();

    if(props.close==true){
      alert("Canal não encontrado!!")
      router.replace("/");
    }

    if(props.infos!=undefined){
    const {Layout,_id,Subs,Follows,CreatedDate,Owner} = JSON.parse(props.infos.Channel);
    
  
  
setTimeout(() => {
  if(props.infos!=null){
  setisloaded(true)
  }
}, 2000);

    return (
         
            <Grid
            h="100vh"
            templateColumns="200px 1fr 60px"
            templateRows="50px 1fr"
            templateAreas={['"navmenu navmenu  navmenu""content content content"','"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"']}
            >
            
             <Head>
            <title>Skap- Channel {Owner}</title>
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
              <Channelspotlight isloaded={isloaded} name={Owner} ></Channelspotlight>
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
              
                        
                </Box>
                
            </TabPanel>
            <TabPanel>
                <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                
                </Box>
                
            </TabPanel>
            <TabPanel>
                <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center" mt="30px">
            
                </Box>
            </TabPanel>
            </TabPanels>
            </Tabs>
                  
      
         </GridItem>   
         </Tabs> 
    
        </Grid>
        )
}else{
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
    
}