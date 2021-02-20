
import { useState } from "react";
import { Avatar,Image,Link, Badge,Button,
useColorMode, Box, MenuButton, Input,
 Progress, InputGroup,Stack, InputRightElement, HStack, useColorModeValue, Grid} from "@chakra-ui/react";
import {useSession} from 'next-auth/client'
import {
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
 MenuDivider,
 Flex,
 Text,
 
} from "@chakra-ui/react"
import { useRouter } from "next/router";



export default function Navmenu(){
    const { colorMode, toggleColorMode } = useColorMode()
    const [plan,setPlan] = useState("Standard");
    const [session,loading] = useSession()
    const router = useRouter();
    const color = useColorModeValue("#E4E8F1","#1A202C");



return(<>

{!loading &&
 
 <Box
        as={Flex}
        zIndex="1"
        alignItems="center"
        textAlign="center"
        width="100%"
        height="60px"
        padding="10px 0"
        bg={color}
        // position="fixed"
        gridArea="nav"
        >

  <Grid w="100%" templateColumns="100px 100px 1fr 80px 80px" templateAreas='"logo nav search but avatar"'>     
  
  
  <Image gridArea="logo" paddingLeft="10px" w="100px" cursor="pointer" onClick={()=>{router.push("/")}} src="/icons/logo.png"></Image>
  
  <Stack gridArea="nav">
  <Text>Inícios</Text>
  <Text>Categorias</Text>
  </Stack>
  <Stack width={["15%","400px"]} gridArea="search" alignSelf="center" marginLeft="20px">
  <InputGroup>
  <InputRightElement w="3rem" cursor="pointer" onClick={()=>{console.log("pesquisando!")}}><svg width="22px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></InputRightElement>
  <Input w="100%" variant="filled" borderRadius="16px" _placeholder={{fontSize:"12px"}} placeholder="O que você está procurando?" type="search"></Input>
  </InputGroup>
  </Stack>


  {session && <>

  <HStack gridArea="but" alignItems="center" justifyContent="center">
  <svg cursor="pointer" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>

<Link href={`/channel/${session.user.name}/upload`}>
<svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
</svg></Link>
</HStack>
 

    <Menu>
          <MenuButton>
          <Avatar gridArea="avatar" border="2px solid green" cursor="pointer"  size="md" name={session.user.name} src={session.user.image} margin=" 0 20px 0 20px" />
          </MenuButton>
          <MenuList margin="10px 20px 0 0" alignItems="center" textAlign="center">

          <Flex display="-webkit-box" alignItems="center" flexDirection="column" justifyContent="center" m="0 auto">
          <Link href={`/user/account/settings`}><Avatar border="2px solid green" size="lg" name={session.user.name} src={session.user.image} /></Link>
          <Box ml="3">
          <Flex flexDirection="column"> 
          <Text fontWeight="bold">
          <Link href={`/user/account/settings`}>{session.user.name}</Link>
          </Text>
          <Text mb="10px" color="Gray" fontSize="12px">
            {session.user.email}
          </Text>
          <Badge ml="1" colorScheme={plan==true?"yellow":"red"}>
          {plan==true?"Premium":"Standard"}
          </Badge>
          
          </Flex>  
          </Box>
          </Flex>
          
          
                 
        <MenuDivider />
        <MenuGroup>
        
        <Link href={`/channel/${session.user.name}`}><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
</svg>Meu Canal</MenuItem></Link>
        <Link href="/user/account"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Minha Conta</MenuItem></Link>
        <Link href="/user/wallet"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>Carteira</MenuItem></Link>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
        <MenuItem onClick={toggleColorMode}>{colorMode=="light"?<svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>:<svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>} Modo {colorMode=="light"?"Escuro":"Claro"}</MenuItem>
        <Link href="/user/settings"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> Configurações</MenuItem></Link>
        <Link href="/help"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Ajuda</MenuItem></Link>
        <Link href="/signout"><MenuItem><svg width="22px" style={{marginRight:"10px",marginLeft:"3px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>Sair</MenuItem></Link>
        </MenuGroup>
        </MenuList>
        </Menu>
         
</>}

{!session &&
   <Flex marginLeft="-60px" alignItems="center">
     <Link href="/login" m="0 5px" ><Button colorScheme="green">Login</Button></Link>
     <Link href="/register" m="0 5px"><Button colorScheme="blue">Cadastre-se</Button></Link>
   </Flex>
  }


  </Grid> 

  
</Box>

}

{loading && 

  <Progress w="100vw" overflow="auto" size="xs" isIndeterminate />

}
</>)    
}