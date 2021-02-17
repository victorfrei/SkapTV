
import { useState } from "react";
import { Avatar,Image,Link, Badge,Button,
useColorMode, Box, MenuButton, Input,
 Progress, InputGroup,Stack, InputRightElement, Tooltip, useColorModeValue } from "@chakra-ui/react";
import {signIn, signOut, useSession} from 'next-auth/client'


import {
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
 MenuDivider,
 Flex,
 Text,
 
} from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";



export default function Navmenu(props){
    const { colorMode, toggleColorMode } = useColorMode()
    const [plan,setPlan] = useState("Standard");
    const [session,loading] = useSession()
    const router = useRouter();
    
return(<>


{!loading &&
 
 <Box
        as={Flex}
        zIndex="1"
        alignItems="center"
        textAlign="center"
        gridArea="nav"
        width="100%"
        padding="10px 0"
        bg={useColorModeValue("#E4E8F1","#1A202C")}
        justifyContent="space-between"
        position="fixed"
        >
  <Image paddingLeft="10px" w="100px" cursor="pointer" onClick={()=>{router.push("/")}} src="/icons/logo.png"></Image>
  <Stack width={["15%","400px"]} marginLeft="20px">
  <InputGroup >
  <InputRightElement w="3rem" cursor="pointer" onClick={()=>{console.log("pesquisando!")}}><FaSearch /></InputRightElement>
  <Input w="100%" variant="filled" borderRadius="16px" _placeholder={{fontSize:"12px"}} placeholder="O que você está procurando?" type="search"></Input>
  </InputGroup>
  </Stack>
  
  {session && <>  
    <Menu>
          <MenuButton>
          <Avatar border="2px solid green" cursor="pointer"  size="md" name={session.user.name} src={session.user.image} margin=" 0 20px 0 20px" />
          </MenuButton>
          <MenuList margin="10px 20px 0 0" alignItems="center" textAlign="center">

          <Flex display="-webkit-box" alignItems="center" flexDirection="column" justifyContent="center" m="0 auto">
          <Avatar border="2px solid green" size="lg" name={session.user.name} src={session.user.image} />
          <Box ml="3">
          <Flex flexDirection="column"> 
          <Text fontWeight="bold">
          {session.user.name}
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
        
        <Link href="/channel"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>Meu Canal</MenuItem></Link>
        <Link href="/user/account"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Minha Conta</MenuItem></Link>
        <Link href="/user/wallet"><MenuItem><svg width="22px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
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
   <Box>
   <Link href="/login" marginRight="25px"><Button colorScheme="teal">Log in</Button></Link>
   <Link href="/register" marginRight="15px"><Button colorScheme="red">
     Criar uma Conta
   </Button></Link>
   </Box>
  }
</Box>

   
 
  
}

{loading && 

  <Progress size="xs" isIndeterminate />

}
</>)    
}