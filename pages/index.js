import { Avatar,Alert,AlertIcon,useToast,Link, Badge,Button, Box,Grid, GridItem,useColorMode, MenuButton, Divider } from "@chakra-ui/react";
import React, { useState} from "react";
import Head from 'next/head';


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
  Heading
} from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack
} from "@chakra-ui/react"

import Thumbnail from '../components/thumbnail';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useDisclosure} from '@chakra-ui/react';
import Axios from "axios";
import logout from '../components/logout';
import ModalComponent from '../components/modal';

export default function home(){

const toast = useToast();
const router = useRouter();
const { colorMode, toggleColorMode } = useColorMode()
const [nick,setNick] = useState("Nome");
const [profile,setProfile] = useState("#");
const [plan,setPlan] = useState("Standard");
const [profileblob,setProfileblob] = useState("#");
const { isOpen, onOpen, onClose } = useDisclosure()
const account = useDisclosure()
 





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

    

  
useEffect(()=>{
  
  
      
    Axios.post("/api/verify",{key:localStorage.getItem("PublicKey")==null?"0001":localStorage.getItem("PublicKey")})
      
    .then((resp)=>{
    
    

    if(resp.data.valid == true){
      setNick(resp.data.values.data.Nick);
      setProfile(resp.data.values.data.Profile);
      setPlan("Standard");
      //console.clear();
    }else {
      console.clear();
      alertW(resp.data.msg,8000,true);
      setTimeout(()=>{},1000);
      router.replace("/login");
    }
    })

  
},[router.pathname]);



return (
     
        <Grid
        h="100vh"
        templateColumns="200px 1fr 60px"
        templateRows="50px 1fr"
        templateAreas={['"navmenu navmenu  navmenu""content content content"','"navmenu navmenu navmenu""content content content"','"navmenu navmenu navmenu""content content content"']}
        >
          
      <Drawer
        isOpen={account.isOpen}
        placement="right"
        onClose={account.onToggle}
        >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Sua Conta</DrawerHeader>

            <DrawerBody>
              <Avatar src={profile}></Avatar>
              <Heading as="h6" size="xs" colorScheme="gray.200">Seu Saldo</Heading>
              <Heading as="h5" size="md" colorScheme="gray.700">Valor</Heading>
              <Box>
              <Heading as="h6" size="xs" colorScheme="gray.200">Seu Cartões</Heading>
              <Heading as="h6" size="xs" colorScheme="gray.200">Cartões aqui</Heading>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Link href="/account"><Button bg="blue">Acessar Pagina Completa</Button></Link>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
  

      
<Head>
      <title>Skap</title>
      
</Head>

<Box
        as={Flex}
        zIndex="1"
        alignItems="center"
        margin=" 0 auto"
        borderBottomRadius="20px"
        gridArea="navmenu"
        w="100%"
        h="50px"
        bg="#091613"
        position="fixed"
        justifyContent="flex-end"
        >
  <ModalComponent name={nick} ></ModalComponent>
  
    
    <Menu>
          <MenuButton>
          <Avatar cursor="pointer"  size="sm" name={nick} src={profile} margin=" 0 20px 0 20px" />
          </MenuButton>
          <MenuList bg="#091613" margin="10px 20px 0 0">
          <Flex alignItems="center" flexDirection="column">
          <Avatar onClick={onOpen} cursor="pointer" size="lg" name={nick} src={profile} />
          <Box ml="3">
          
          <Text fontWeight="bold">
          {nick}
          <Badge ml="1"  colorScheme={plan=="Premium"?"yellow":"gray"}>
          {plan}
          </Badge>
          </Text>
          
          </Box>
          </Flex>
          
                 
        <MenuDivider />
        <MenuGroup title="Perfil">
        <MenuDivider />
        <Link href={`/channel/${nick}`} ><MenuItem>Meu Canal</MenuItem></Link>
        <MenuItem onClick={account.onOpen} >Minha Conta</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Outros">
        <MenuDivider />
        <MenuItem onClick={toggleColorMode}>Mudar Para {colorMode=="light"?"Dark":"Light"} Mode</MenuItem>
        <MenuItem >Configurações</MenuItem>
        <MenuItem >Ajuda</MenuItem>
        <MenuItem onClick= {logout}>Sair</MenuItem>
        </MenuGroup>
        </MenuList>
        </Menu>


    <Modal onClose={onClose} size="md" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Mudar Avatar</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex justifyContent="center" alignItems="center" direction="column">
                <Avatar src={profile == "#" ? "https://via.placeholder.com/128": profile} name={nick} size="2xl" marginBottom="40px"></Avatar>
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
    
    
    </Box>




     <GridItem
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
     >
        <Box as={Flex} justifyContent="space-between" bg="black" w="100%">
          <Avatar></Avatar>
          <Text></Text>
          <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
          <Button>Visitar</Button>
          <Button>Assistir</Button>        
        </Box>
        <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center">
        <Heading size={4}>Recomendados</Heading>
        <Divider/>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        </Box>
        <Flex w='100%' alignItems="center" mb="30px">
          <Divider/>
          <Button w="20%">Mostrar Mais</Button>
          <Divider/>
        </Flex>          

        <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center">
        <Heading size={4}>Em Alta</Heading>
        <Divider/>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        </Box>
        <Flex w='100%' alignItems="center" mb="30px">
          <Divider/>
          <Button w="20%">Mostrar Mais</Button>
          <Divider/>
        </Flex>

        <Box w="100%" as={Flex} flexWrap="wrap" justifyContent="center">
        
        <Heading size={4}>Categorias</Heading>
        <Divider/>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        <Thumbnail link="/watch" img="\imgs\py.jpg" title="PC Baratinho para encarar Cyberpunk 2077: até onde é preciso ir? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" category="Teste"></Thumbnail>
        </Box>
        <Flex w='100%' alignItems="center" mb="30px">
          <Divider/>
          <Button w="20%">Mostrar Mais</Button>
          <Divider/>
        </Flex>

     </GridItem>   


    </Grid>
    )

}