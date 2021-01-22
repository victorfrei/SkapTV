import {Grid,Flex,Button,Link, Text, CircularProgress,Heading, Box, HStack, IconButton, Avatar, Spinner, AvatarBadge} from "@chakra-ui/react"
import Axios from "axios";

import {useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { FaChevronCircleLeft, FaVideo, FaPlusCircle, FaChartBar, FaEllipsisH } from "react-icons/fa";

export default function Estatisticas(){
    
    const [session, loading] = useSession();
  const router = useRouter();





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
    <Flex gridArea="header" fontFamily="Gilroy-Light"  justifyContent="space-between" padding="20px 60px">
    <Heading fontFamily="Gilroy-Bold">{router.pathname.split("/")[2].toLocaleUpperCase()}</Heading> <Button fontSize="15px" leftIcon={<FaPlusCircle/>} bg="#418dff" _hover={{bg:"#8d68fa"}} w="150px">Enviar</Button>
    </Flex>
    <Flex gridArea="content">

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