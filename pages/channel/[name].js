import {useSession} from "next-auth/client"
import mongoose from "mongoose"
import { ST } from "next/dist/next-server/lib/utils";
import { Avatar, Button, ButtonGroup, Flex, Grid,Image, Stack, useColorModeValue } from "@chakra-ui/react";
import Navmenu from "../../components/navmenu";

const Channel = new mongoose.Schema(
    {
        Owner:Object,
        Banner:String,
        Image:String,
        Description:String,
        Follwers:Number,
        Subs:Number,
        Shares:Number,
        Category:String
    }
)




export default function channel({infos}){
    const info = JSON.parse(infos);
    return <>
    <Navmenu></Navmenu>
    <Image bg="black" fit="cover" src={info[0].Banner} border="none" w="100%" h="32vh"></Image>
    <Grid h="80vh" w="100%" position="absolute" top="34vh"
      templateRows="100px 30px 80px 1fr"
      templateAreas='"chanelinfos"".""."'
      >
    <Flex justifyContent="space-between" borderRadius="30px" bg={useColorModeValue("#1A202C","#E2E8F0")} padding="15px" h="100%" alignItems="center" gridArea="chanelinfos">
    <Flex>
    <Avatar size="xl" name={info[0].Name} src={info[0].Image}></Avatar>
    <Flex flexDir="column">
    {info[0].Name}
    <Flex>
    {info[0].Follwers} Seguidores - {info[0].Subs} Inscritos
    </Flex>
    </Flex>
    </Flex>
    <ButtonGroup>
    <Button>Seguir</Button>
    <Button>Inscrever-se</Button>
    </ButtonGroup>
    </Flex>

    </Grid>



    </>
}


export async function getServerSideProps(context){
    if(context.query.name){
    const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
    const data = conn.model("channels",Channel);
    const infos = await data.find({'Owner.Name':context.query.name});
    return {
        props:
            {infos: JSON.stringify(infos,null,3)}}

    }else{
        return {props:{infos:null}}
    }

    }