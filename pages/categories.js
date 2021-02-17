import { Box, Flex, SimpleGrid,Image,Text, useColorModeValue, Skeleton, Tag, Heading } from "@chakra-ui/react"
import mongoose from "mongoose"
import Navmenu from "../components/navmenu";
import {useRouter} from 'next/router';
import { useEffect } from "react";

export default function Category({categories}){
   const cat = JSON.parse(categories);
   const data = [];
   let loading = true;
   const router = useRouter();

   for(let x=0;x<cat.length;x++){
    let tags = [];
    
    cat[x].Tags.forEach(element => {
        tags.push(<Tag cursor="pointer" bg="gray.300" color="black" onClick={()=>{router.push(`/videos?t=${element}`)}} w="fit-content">{element}</Tag>);
    });

       data.push(
        <Flex key={Math.random().toString()} marginTop="80px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color={useColorModeValue("black","white")} borderRadius="20px" flexDir="column" w={["60vw","220px"]} h="400px" alignItems="flex-start" justifySelf="center" justifyContent="center">
            <Image cursor="pointer" onClick={()=>{router.push(`/videos/?q=${cat[x].Name}`)}} borderTopRadius="20px" minW="100%" h="216px" fit="cover" src={cat[x].Image}></Image>
            <Flex padding="15px" w="100%" flexDir="column">
            <Heading size={3} alignSelf="center">{cat[x].Name}</Heading>
            <Text noOfLines={3}>{cat[x].Description}</Text>
            <Text>{cat[x].UsedAmount} vídeos</Text>
            <SimpleGrid  columns={2} spacing="10px" paddingTop="10px">{tags}</SimpleGrid>
            </Flex>
        </Flex>
       )
       loading= false;
       }
   
    return <>
        <Navmenu></Navmenu>
        <SimpleGrid key="A" columns={[1,2,3,4]} spacing={[0,10]} padding={["20px","80px"]} >
        {data &&   
        data
        }
        {loading && <>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        <Skeleton w="220px" h="400px"></Skeleton>
        </>}
    </SimpleGrid>
    </>
}

const categories = new mongoose.Schema(
    {
        Name:String,
        Image:String,
        Description:String,
        Banner:String,
        UsedAmount:String,
        Tags:Array  
    }
    )
  

export async function getStaticProps(){
        const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
        const data = conn.model("Categories",categories);
        const readyData = await data.find().sort({UsedAmount: -1});

    return {props:{categories:JSON.stringify(readyData,null,0)},revalidate:3600}
}