
import { useState } from "react";
import { Avatar,useToast,Link, Badge,Button,
useColorMode,useDisclosure, Box, MenuButton, Input,
 Progress, InputGroup,Stack, InputRightElement } from "@chakra-ui/react";
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



export default function Navmenu(){
    const { colorMode, toggleColorMode } = useColorMode()
    const [plan,setPlan] = useState("Standard");
    const [ID,setID] = useState()
    const [session,loading] = useSession()

return(<>


{!loading &&
 
 <Box
        as={Flex}
        zIndex="1"
        alignItems="center"
        gridArea="nav"
        margin="0 20px"
        justifyContent="space-between"
        >
  
  <Stack>
  <InputGroup>
  <InputRightElement w="3rem" cursor="pointer" onClick={()=>{console.log("pesquisando!")}}><FaSearch /></InputRightElement>
  <Input w="400px" variant="filled" borderRadius="16px" _placeholder={{fontSize:"12px"}} placeholder="O que você está procurando?" type="search"></Input>
  </InputGroup>
  </Stack>
  {session && <>  
    <Menu>
          <MenuButton>
          <Avatar border="2px solid red" cursor="pointer"  size="sm" name={session.user.name} src={session.user.image} margin=" 0 20px 0 20px" />
          </MenuButton>
          <MenuList margin="10px 20px 0 0" textAlign="center">
          <Flex alignItems="center" flexDirection="column">
          <Avatar border="2px solid red" size="lg" name={session.user.name} src={session.user.image} />
          <Box ml="3">
          <Flex flexDirection="column"> 
          <Text fontWeight="bold">
          {session.user.name}
          </Text>
          <Text mb="10px" color="Gray" fontSize="12px">
            {session.user.email}
          </Text>
          <Badge ml="1" colorScheme={plan==true?"yellow":"gray"}>
          {plan==true?"Premium":"Standard"}
          </Badge>
          
          </Flex>  
          </Box>
          </Flex>
          
          
                 
        <MenuDivider />
        <MenuGroup title="Perfil">
        <MenuDivider />
        <Link href={`/${ID}`} ><MenuItem>Meu Canal</MenuItem></Link>
        <Link href="/account"><MenuItem>Minha Conta</MenuItem></Link>
        <Link href="/studio"><MenuItem >Studio</MenuItem></Link>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Outros">
        <MenuDivider />
        <MenuItem onClick={toggleColorMode}>Mudar Para {colorMode=="light"?"Dark":"Light"} Mode</MenuItem>
        <Link href="/configuracoes"><MenuItem >Configurações</MenuItem></Link>
        <Link href="/ajuda"><MenuItem >Ajuda</MenuItem></Link>
        <Link href="/signout"><MenuItem>Sair</MenuItem></Link>
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