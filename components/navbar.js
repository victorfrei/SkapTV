import {Box,Button,Text,Divider,Flex,Image,useColorMode, Link} from '@chakra-ui/react';


export default function navbar(){

    const {colorMode} = useColorMode();

    return(
        <Box maxW={["0","0","50%"]}  height="100%" borderRight="1px solid" borderColor={colorMode=="light"?"#ecebdf":"#403737"} overflow="hidden">
               
        <Flex alignItems="center" width="-webkit-fill-available" flexDirection="column">

        <Image src={colorMode=="light"?"/icons/logo/white.png":"/icons/logo/dark.png"} borderRadius="50px" maxW="400px" alt="Logo"/>
        <Text marginTop="30px" marginLeft="-100px">
            Menu
        </Text>
        
        <Link href="/" w="90%" _hover={{textDecoration:"none"}}><Button _hover={{bg:"#6D5DD3"}}  margin="10px" variant="outline"  borderRadius="10px" border="none" w="90%" >Inicio</Button></Link>
        <Link href="/trending" w="90%" _hover={{textDecoration:"none"}} ><Button _hover={{bg:"#6D5DD3"}} margin="10px" variant="outline" border="none" borderRadius="10px" w="90%">Em Alta</Button></Link>
        <Link href="/profile/subs" w="90%" _hover={{textDecoration:"none"}}><Button _hover={{bg:"#6D5DD3"}} margin="10px" variant="outline" border="none" borderRadius="10px" w="90%">Inscrições</Button></Link>

        <Divider/>

        <Link href="/profile/history" w="90%" _hover={{textDecoration:"none"}}><Button _hover={{bg:"#6D5DD3"}} margin="10px" variant="outline" borderRadius="10px" border="none" w="90%">Histórico</Button></Link>
        <Link href="/profile/liked" w="90%" _hover={{textDecoration:"none"}}><Button _hover={{bg:"#6D5DD3"}} margin="10px" variant="outline" borderRadius="10px" border="none" w="90%">Videos Curtidos</Button></Link>
        


        <Button margin="150px 50px 50px 50px" border="none" w="90%" backgroundColor="#6D5DD3" _hover={{bg:"#313aa1"}} borderRadius="10px">Upload Video</Button>
        </Flex>
               
        
       
        </Box>
        
    )
}