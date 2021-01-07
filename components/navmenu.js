
import { useState } from "react";
import { Avatar,useToast,Alert,AlertIcon,Link,Image, Badge,Button,useColorMode,useDisclosure, Box, MenuButton, Input } from "@chakra-ui/react";
import Axios from "axios";
import { TabList, Tab} from "@chakra-ui/react"
import logout from '../components/logout';
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
 import {useRouter} from 'next/router';



export default function Navmenu(props){
    const { colorMode, toggleColorMode } = useColorMode()
    const [nick,setNick] = useState("Nome");
    const [profile,setProfile] = useState("#");
    const [plan,setPlan] = useState("Standard");
    const [profileblob,setProfileblob] = useState("#");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ID,setID] = useState()
    const toast = useToast();
    const router = useRouter();




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




return(
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
        justifyContent="space-between"
        >
  
  <Link href="/"><Image src={colorMode=="light"?"/icons/logo/lightlogo.svg":"/icons/logo/darklogo.svg"} w="80px" m="20px" mt="30px"></Image></Link>
  <TabList ml="-200px" color="whitesmoke" hidden={!props.navmenu}>
    <Tab color="white" size={4}>Ínicio</Tab>
    <Tab color="white" size={4}>Em Alta</Tab>
    <Tab color="white" size={4}>Categorias</Tab>
    
  </TabList>
  <Input w="400px" type="search"></Input>
    
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
          <Badge ml="1"  colorScheme={plan==true?"yellow":"gray"}>
          {plan==true?"Premium":"Standard"}
          </Badge>
          </Text>
          
          </Box>
          </Flex>
          
          
                 
        <MenuDivider />
        <MenuGroup title="Perfil">
        <MenuDivider />
        <Link href={`/channel/?id=${ID}`} ><MenuItem>Meu Canal</MenuItem></Link>
        <Link href="/account"><MenuItem>Minha Conta</MenuItem></Link>
        <Link href="https://studio.skap.tv" isExternal><MenuItem >Fazer Upload</MenuItem></Link>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Outros">
        <MenuDivider />
        <MenuItem onClick={toggleColorMode}>Mudar Para {colorMode=="light"?"Dark":"Light"} Mode</MenuItem>
        <Link href="/configuracoes"><MenuItem >Configurações</MenuItem></Link>
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
    )
}