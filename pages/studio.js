import {Grid,Flex,Button,Link, Text,
Image,Heading, Box, Avatar, Spinner, AvatarBadge, SimpleGrid, CloseButton, Tooltip} from "@chakra-ui/react"
import Axios from "axios";
import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import {FaVideo, FaPlusCircle, FaChartBar, FaEllipsisH, FaVideoSlash } from "react-icons/fa";
import VideoModal from "../components/VideoModal";

export async function getServerSideProps(context){
 const session = await getSession(context);
 if(session){ 
 const data = await fetch("http://localhost:3000/api/v2/user/videos",{method:"POST",headers:context.req.headers})
 return {
   props: {data: await data.json()},
 }
}else{
  return{
     props: {data:{}}
  }
}
}   



export default function Studio(props){
    const [session, loading] = useSession();
    const router = useRouter();
    const [videos,setvideos] = useState([]);
    const [upload,setupload] = useState(false);

  
    if(props.data!=[]){
      const videos = [];
      for(let x=0;x<props.data.length;x++){
        videos.push(
          <Box  w="300px" textAlign="center" height="300px">
          <Image src={`https://image.mux.com/${props.data[x].spS_Thumbnail}/thumbnail.png?width=214&height=121&fit_mode=pad`} borderRadius="20px" w="100%" h="60%"></Image>
          <Text>{props.data[x].spS_Nome}</Text>
          <Text>{Date(props.data[x].spS_Date)}</Text>
          </Box>
        )
        
      }
     
      useEffect(()=>{
        setvideos(videos);
      },[router.pathname])
    }
    




return(
  <>
{loading &&
<Flex h="100vh" justifyContent="center" alignItems="center">
<Spinner color="red.500" size="xl" />
</Flex>
}

{!loading && <>

  {session &&
  <Grid templateColumns="200px 1fr" h="100vh" templateRows="60px 1fr"
   templateAreas="'sidebar header''sidebar content''sidebar content'">
    <Flex gridArea="sidebar" justifyContent="center"  borderRight="1px solid" borderColor="gray.700">
    <Flex flexDir="column" textAlign="start" padding="10px" justifyContent="center" w="100%">
    <Box flex="1">
     
    </Box>
    <Box flex="2">
    <Text m="10px 0 10px 12px" fontSize="13px" color="gray.400">
    Videos
    </Text>
    <Button w="100%" borderRadius="10px" bg="#35cda7" leftIcon={<FaVideo/>}>Meus Videos</Button>
    <Text m="10px 0 10px 12px" fontSize="13px" color="gray.400">
    Outros
    </Text>
    <Button w="100%" borderRadius="10px" bg="#35cda7" leftIcon={<FaChartBar/>}>Estatisticas</Button>
    </Box>
    <Box as={Flex} flex="1" alignItems="center" flexDir="row" justifyContent="space-around">
      <Avatar size="sm" src={session.user.image} name={session.user.name}>
      <AvatarBadge boxSize="35%" bg="green.500" />
      </Avatar>
      <Text m=" 0 10px" isTruncated >{session.user.name}</Text>
      <Button size="sm" borderRadius="34px" alignItems="center"><FaEllipsisH size="20px"/></Button>
    </Box>
    </Flex>
    </Flex>
    <Flex gridArea="header" fontFamily="Gilroy-Light"  justifyContent="space-between" alignItems="center" padding="20px 30px">
    <Heading fontFamily="Gilroy-Bold">Meus Vídeos</Heading>
    <Button fontSize="15px" onClick={()=>{setupload(<VideoModal ></VideoModal>)}} leftIcon={<FaPlusCircle/>} ml="700px" bg="#418dff" _hover={{bg:"#8d68fa"}} w="150px">Enviar</Button>
    {upload}
    
   
    
    
    
    
    
    
    <Tooltip label="Fechar Studio"><CloseButton mr="-10px" onClick={()=>{router.push("/")}}/></Tooltip>
    </Flex>
    <Flex gridArea="content" m="20px" padding="10px">
     
    {videos.length!=0?
    <SimpleGrid columns={3} overflow="auto" w="100%" h="100%" padding="60px" spacing={10}>
    {videos}
    </SimpleGrid>
    :
    <Flex w="100%" h="100%" flexDir="column" textAlign="center" justifyContent="center" alignItems="center">
      <FaVideoSlash size="40px"/>
      <Text>Sem vídeos</Text>
    </Flex>
    }
    </Flex>
  </Grid>
}
{!session && <>
  <Flex flexDirection="column" h="100vh" justifyContent="center" padding="5px" alignItems="center">
  <Text fontSize="30px" margin="10px"><strong>Acesso Negado!</strong></Text>
  <h3 fontSize="15px" margin="10px">Você necessita está logado para utilizar o studio.</h3>
  <Link href="/login" margin="10px"><Button>Ir para página de login</Button></Link>
  </Flex>


</>
}
</>
}




</>
)
}