import { Avatar,useToast,Link,Image, Badge, Box,Grid,Heading, GridItem,Input, InputGroup, InputLeftElement, useColorMode, MenuButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiSearch,FiBell,FiPlusCircle } from "react-icons/fi";
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

import NavBar from '../components/navbar';
import Video from '../components/video';
import {useRouter} from 'next/router';
import {useEffect} from 'react'
import Axios from "axios";
import logout from '../components/logout';






export default function home(){

const toast = useToast();
const router = useRouter();
const { colorMode, toggleColorMode } = useColorMode()
const [nick,setNick] = useState();
const [profile,setProfile] = useState("#");
const [plan,setPlan] = useState("Standard");
 
const alertW = (data,duration,closable) =>{
    toast({
       description:data,
      status:"warning",
      duration: duration,
      position:"top",
      isClosable: closable
    })}






  
useEffect(()=>{
  
    
      
    Axios.post("/api/verify",{key:localStorage.getItem("PublicKey")==null?"0001":localStorage.getItem("PublicKey")})
      
    .then((resp)=>{
    console.log(resp);
      
    if(resp.data.valid == true){
      setNick(resp.data.values.data.Nick);
      setProfile(resp.data.values.data.profile);
      console.clear();
    }else {
      console.clear();
      alertW(resp.data.msg,8000,true);
      setTimeout(()=>{},1000);
      router.replace("/login");
    }
    })

  
},router.pathname);



return (
     
        <Grid
        h="100vh"
        templateColumns="200px 1fr 60px"
        templateRows="50px 1fr"
        templateAreas={['"search search  profile""content content content"','"search search  profile""content content content"','"navbar search  profile""navbar content content"']}
        >

      
<Head>
      <title>Skap</title>
      </Head>

        <GridItem position="fixed"  widht="100%" height="100%" id="navbar"
        gridArea="navbar"
        
        >
        <NavBar></NavBar>
      </GridItem>    


        <GridItem
       paddingLeft="100px"
       paddingTop= "5px"
       paddingBottom="3px"
       gridArea="search"
        alignSelf="center"
       borderBottom="1px solid"
       justifyContent="center"
       borderColor={colorMode=="light"?"#ecebdf":"#403737"}
        >
    <Flex alignItems="center">
    <InputGroup marginLeft={["-80px","-80px","0"]}>
    <InputLeftElement
      pointerEvents="none"
      children={<FiSearch width="100%" color="gray.500" />}
    />
    <Input w="40%" w={["80%","80%","40%"]} type="text" placeholder="Buscar" />
    </InputGroup>
    
    <FiPlusCircle as={Flex} display={["none","none","block"]} size="20px" style={{marginLeft:"30px"}}/>
    <FiBell size="20px" style={{marginLeft:"15px"}}/>
    
    </Flex>
    </GridItem>




    <GridItem
        padding="10px 0 0 15px"
        gridArea="profile"
        justifySelf="center"
        width="100%"
        zIndex="20"
        borderBottom="1px solid"
        borderColor={colorMode=="light"?"#ecebdf":"#403737"}
        >

        <Menu>
          <MenuButton>
          <Avatar  cursor="pointer" size="sm" name={nick} src={profile} />
          </MenuButton>
        <MenuList>
          <Flex alignItems="center" flexDirection="column">
          <Avatar  cursor="pointer" size="lg" name={nick} src={profile} />
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
        <Link href="/account" ><MenuItem>Minha Conta</MenuItem></Link>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Outros">
        <MenuDivider />
        <MenuItem onClick={toggleColorMode} >Mudar Para {colorMode=="light"?"Dark":"Light"} Mode</MenuItem>
        <MenuItem >Configurações</MenuItem>
        <MenuItem >Ajuda</MenuItem>
        <MenuItem onClick= {logout}>Sair</MenuItem>
        </MenuGroup>
        </MenuList>
        </Menu>

    
    </GridItem>
    
     <GridItem
      gridArea="content"
    display="flex"
    flexWrap="wrap"
   width="100%"
     >
        <Text margin="10px 0 0 10px" >Recomendados:</Text>
        
        <br/>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         <Video img="/imgs/js.png" alt="javascript" likes="50" views="1000" title="Javascript Básico" ></Video>
         <Video img="/imgs/css.jpg" alt="javascript" likes="50" views="1000" title="CSS Básico" ></Video>
         <Video img="/imgs/java.jpg" alt="javascript" likes="50" views="1000" title="Java Básico" ></Video>
         <Video img="/imgs/c.png" alt="javascript" likes="50" views="1000" title="C Básico" ></Video>
         <Video img="/imgs/py.jpg" alt="javascript" likes="50" views="1000" title="Pyton Básico" ></Video>
         <Video img="/imgs/ruby.png" alt="javascript" likes="50" views="1000" title="Ruby on Rails Básico" ></Video>
         
     </GridItem>   


    </Grid>
    )

}