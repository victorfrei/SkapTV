import {Grid,Flex, Spinner,Heading, Button, Box,Image,Text, SimpleGrid, useColorModeValue, Avatar, Link, Divider,HStack} from "@chakra-ui/react";
import React from 'react';
import Navmenu from "../components/navmenu";
import mongoose from 'mongoose';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale("pt-br")





const Videos = new mongoose.Schema(
{
  VideoID:String,
  Owner:{Name:String,Image:String},
  Data:{type:Date,default:Date.now()},
  Name:String,
  Views:Number,
  Likes:Number,
  Comments:{PostedBy:{Name:String,Image:String,Comment:String}}

}
)




export async function getStaticProps(){
  const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
  const data = conn.model("videos",Videos);
  const trending = await data.find().sort({Views:-1});
  const newest = await data.find().sort({Data:-1});
  const mostliked = await data.find().sort({Likes:-1});

return {
  props:{
    Trending:JSON.stringify(trending,null,0),
    Newest:JSON.stringify(newest,null,0),
    MostLiked:JSON.stringify(mostliked,null,0),
  
  
  },revalidate:1
}
}


export default function Home({Trending,Newest,MostLiked}){
  const tre = JSON.parse(Trending);
  const nw = JSON.parse(Newest);
  const ml = JSON.parse(MostLiked);
  const trending = [];
  const newest = [];
  const mostliked = [];

  for(let x=0;x<tre.length;x++){
        

      newest.push(
        <Box  key={x} w="300px" h="265px" borderRadius="20px" fontSize={15} bg={useColorModeValue("#a0a0a0","#2f2f2f")}>
        <Flex w="100%" h="100%" flexDir="column" >
        <Link  w="100%" h="80%" href={`/watch/${tre[x].VideoID}`}><Image  borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = `https://image.mux.com/${nw[x].VideoID}/animated.gif?width=300&height=160`}} onMouseLeave={(e)=>{e.currentTarget.src=`https://image.mux.com/${nw[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}} src={`https://image.mux.com/${nw[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}></Image></Link>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Link href={`/channel/${nw[x].Owner.Name}`}><Avatar  gridArea="avatar" src={nw[x].Owner.Image} name={nw[x].Owner.Name}></Avatar></Link>
        <Link href={`/watch/${nw[x].VideoID}`}  gridArea="nome" ><Text noOfLines={2} marginLeft="10px"><strong>{nw[x].Name}</strong></Text></Link>
        <Link href={`/channel/${nw[x].Owner.Name}`} marginTop="10px" marginLeft="10px" gridArea="author"><Text>{nw[x].Owner.Name}</Text></Link>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">{nw[x].Views} views - {moment(nw[x].Data).fromNow()} - {nw[x].Likes} Curtidas</Text>
        </Grid>
        </Flex>
      </Box>
      )

      mostliked.push(
        <Box  key={x} w="300px" h="265px" borderRadius="20px" fontSize={15} bg={useColorModeValue("#a0a0a0","#2f2f2f")}>
        <Flex w="100%" h="100%" flexDir="column" >
        <Link  w="100%" h="80%" href={`/watch/${tre[x].VideoID}`}><Image  borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = `https://image.mux.com/${ml[x].VideoID}/animated.gif?width=300&height=160`}} onMouseLeave={(e)=>{e.currentTarget.src=`https://image.mux.com/${ml[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}} src={`https://image.mux.com/${ml[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}></Image></Link>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Link href={`/channel/${ml[x].Owner.Name}`}><Avatar  gridArea="avatar" src={ml[x].Owner.Image} name={ml[x].Owner.Name}></Avatar></Link>
        <Link href={`/watch/${ml[x].VideoID}`}  gridArea="nome" ><Text noOfLines={2} marginLeft="10px"><strong>{ml[x].Name}</strong></Text></Link>
        <Link href={`/channel/${ml[x].Owner.Name}`} marginTop="10px" marginLeft="10px" gridArea="author"><Text>{ml[x].Owner.Name}</Text></Link>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">{ml[x].Views} views - {moment(ml[x].Data).fromNow()} - {ml[x].Likes} Curtidas</Text>
        </Grid>
        </Flex>
      </Box>
      )
      trending.push(
        <Box  key={x} w="300px" h="265px" borderRadius="20px" fontSize={15} bg={useColorModeValue("#a0a0a0","#2f2f2f")}>
        <Flex w="100%" h="100%" flexDir="column" >
        <Link  w="100%" h="80%" href={`/watch/${tre[x].VideoID}`}><Image  borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = `https://image.mux.com/${tre[x].VideoID}/animated.gif?width=300&height=160`}} onMouseLeave={(e)=>{e.currentTarget.src=`https://image.mux.com/${tre[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}} src={`https://image.mux.com/${tre[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}></Image></Link>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Link href={`/channel/${tre[x].Owner.Name}`}><Avatar  gridArea="avatar" src={tre[x].Owner.Image} name={tre[x].Owner.Name}></Avatar></Link>
        <Link href={`/watch/${tre[x].VideoID}`}  gridArea="nome" ><Text noOfLines={2} marginLeft="10px"><strong>{tre[x].Name}</strong></Text></Link>
        <Link href={`/channel/${tre[x].Owner.Name}`}  marginTop="10px" marginLeft="10px" gridArea="author"><Text>{tre[x].Owner.Name}</Text></Link>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">{tre[x].Views} views - {moment(tre[x].Data).fromNow()} - {tre[x].Likes} Curtidas</Text>
        </Grid>
        </Flex>
      </Box>
      )
      }



 
return (<>
     
        <Grid
        h="100vh"
        templateColumns="100px 1fr"
        templateRows="50px 1fr"
        templateAreas={'"nav nav""content content"'}
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
       <Box>
         <HStack >
       <svg style={{marginLeft:"15px"}} width="22px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
</svg><Heading className="newfont" fontSize={23} size={1} m="12px">Em Alta</Heading>
</HStack>
      <SimpleGrid columns={[1,2,2,4]} spacing={10} m="10px" columnGap={15}>
      {trending}
      </SimpleGrid>
      <HStack >
     <svg style={{marginLeft:"15px"}} width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
</svg>
<Heading className="newfont" fontSize={23} mt="40px" m="12px" size={1}>Publicados Recentemente</Heading>
      </HStack>
    
     <SimpleGrid columns={[1,2,2,4]} spacing={10} m="10px" columnGap={15}>
      {newest}
     </SimpleGrid>
     <HStack>
     <svg style={{marginLeft:"15px"}} width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>
     <Heading className="newfont" fontSize={23} mt="40px" m="12px" size={1}>Mais Curtidos</Heading>
     </HStack>
     <SimpleGrid columns={[1,2,2,4]} spacing={10} m="10px" columnGap={15}>
      {mostliked}
     </SimpleGrid>
     </Box>
    



       </Flex>
       
      
     </Grid>
    
   
    </>


    )}

    



