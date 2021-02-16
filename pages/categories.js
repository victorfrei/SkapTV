import { Box, Flex, SimpleGrid,Image,Text, useColorModeValue, Skeleton } from "@chakra-ui/react"
import mongoose from "mongoose"
import Navmenu from "../components/navmenu";


export default function Category({categories}){
   const cat = JSON.parse(categories);
   const data = [];
   let loading = true;

   for(let x=0;x<cat.length;x++){
       data.push(
        <Flex cursor="pointer" bg="#0f0f0f" borderRadius="20px" flexDir="column" w="220px" h="400px" alignItems="flex-start" justifyContent="center">
            <Image borderTopRadius="20px" w="220px" h="240px" fit="cover" src={cat[x].Image}></Image>
            <Flex padding="15px" w="100%" flexDir="column">
            <Text alignSelf="center">{cat[x].Name}</Text>
            <Text noOfLines={3}>{cat[x].Description}</Text>
            <Text>{cat[x].UsedAmount} vídeos</Text>
            <Text>{cat[x].Tags}</Text>
            </Flex>
        </Flex>
       )
       loading= false;
    }

    return <>
        <Navmenu></Navmenu>
        <SimpleGrid columns={4} spacing={10} padding="80px" >
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
        Tags:String  
    }
    )
  

export async function getStaticProps(){
        const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
        const data = conn.model("Categories",categories);
        const readyData = await data.find().sort({UsedAmount: -1});

    return {props:{categories:JSON.stringify(readyData,null,0)},revalidate:3600}
}