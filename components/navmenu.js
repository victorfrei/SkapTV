
import { useState } from "react";
import { Avatar,useToast,Alert,AlertIcon,Link,Image, Badge,Button,
useColorMode,useDisclosure, Box, MenuButton, Input, useColorModeValue,
 Progress, InputGroup, InputRightAddon, Stack, InputRightElement } from "@chakra-ui/react";
import Axios from "axios";
import { TabList, Tab} from "@chakra-ui/react"
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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
 } from "@chakra-ui/react"
import { Router } from "next/router";
import { FaSearch } from "react-icons/fa";
 



export default function Navmenu(props){
    const { colorMode, toggleColorMode } = useColorMode()
    const [nick,setNick] = useState("Nome");
    const [profile,setProfile] = useState("#");
    const [plan,setPlan] = useState("Standard");
    const [profileblob,setProfileblob] = useState("#");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ID,setID] = useState()
    const toast = useToast();
    const [session,loading] = useSession()
   



    const alertW = (data,duration,closable) =>{
        toast({
           description:data,
          status:"warning",
          duration: duration,
          position:"top",
          isClosable: closable
        })
      return 0;
      }
    
      const alert = (data,duration,closable,status) =>{
        toast({
           description:data,
          status:status,
          duration: duration,
          position:"top",
          isClosable: closable,
        })
      return 0;
      }


return(<>


{!loading &&
 
 <Box
        as={Flex}
        zIndex="1"
        alignItems="center"
        margin=" 0 auto"
        borderBottomRadius="20px"
        gridArea="navmenu"
        w="100%"
        h="50px"
        bg={useColorModeValue("#173840","#262626")}
        position="fixed"
        justifyContent="space-between"
        >
  
  <Link href="/"><Image src={colorMode=="light"?"/icons/logo/lightlogo.svg":"/icons/logo/darklogo.svg"} w="80px" m="20px" mt="30px"></Image></Link>
  <TabList ml="-200px" color="whitesmoke" _disabled={!props.navmenu} hidden={!props.navmenu}>
    <Tab color="white" size={4} >Ínicio</Tab>
    <Tab color="white" size={4} >Em Alta</Tab>
    <Tab color="white" size={4} >Categorias</Tab>
    
  </TabList>
  <Stack>
  <InputGroup>
  <InputRightElement w="3rem" cursor="pointer" onClick={()=>{console.log("pesquisando!")}}><FaSearch /></InputRightElement>
  <Input w="400px" variant="filled" placeholder="O que você está procurando?" type="search"></Input>
  </InputGroup>
  </Stack>
  {session && <>  
    <Menu bg={useColorModeValue("#011c26","")}>
          <MenuButton>
          <Avatar border="2px solid red" cursor="pointer"  size="sm" name={session.user.name} src={session.user.image} margin=" 0 20px 0 20px" />
          </MenuButton>
          <MenuList bg="#091613" margin="10px 20px 0 0" textAlign="center">
          <Flex alignItems="center" flexDirection="column">
          <Avatar border="2px solid red" onClick={onOpen} cursor="pointer" size="lg" name={session.user.name} src={session.user.image} />
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
  {session && <>
    <Modal onClose={onClose} size="md" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Mudar Avatar</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex justifyContent="center" alignItems="center" direction="column">
                <Avatar src={session.user.image} name={session.user.name} size="2xl" marginBottom="40px"></Avatar>
                <input type="file" accept="image/*" onChange={(e)=>{
                  const file = new FileReader();
                  file.onloadend= ()=>{
                      setProfileblob(file.result);
                      setProfile(file.result);
                  }
                  file.readAsDataURL(e.target.files[0]);
                  
              }}></input>
               <Alert marginTop="20px" status="warning">
              <AlertIcon />
                O avatar pode ter até no Max. 1MB
              </Alert>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button marginRight="20px" onClick={()=>{
                  Axios.post("/api/changeimage",{token:localStorage.getItem("PublicKey"), Profile:profileblob})
                  .then((data)=>{
                    if(data.status== 200){
                      localStorage.setItem("PublicKey",data.data)
                      alert("Avatar alterado!",2000,true,"success");
                    }
                    })
                   .catch((data)=>{
                     if(data){
                      alertW("A imagem é maior que 1MB!!",2000,true);
                     }
                    })
                  
                  
                  onClose();
                }}>Confirmar</Button>
                <Button onClick={()=>{
                  onClose();
                  }}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
         </Modal>
    
         </>
      }

   </Box>

   
 
  
}

{loading && 

  <Progress size="xs" isIndeterminate />

}
</>)    
}