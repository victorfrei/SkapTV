// import Head from 'next/head'

import {Grid, Flex, Tooltip, Button,useToast, Text, InputGroup, InputRightElement} from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
//import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import {csrfToken} from 'next-auth/client';
import { FaDiscord,FaFacebook,FaRegEye,FaRegEyeSlash,FaTwitch } from "react-icons/fa";
import { useState } from 'react';

export default function Login({csrfToken}) {
  
  const toast = useToast();
  const color = useColorModeValue("white","gray.300");
  const { colorMode, toggleColorMode } = useColorMode()
  const [pass,setpass] = useState("password");
  const [icon,seticon] = useState(<FaRegEyeSlash color="black"/>);
  const [show,setshow] = useState(false)
return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 1fr 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas={["'. . mode''form form form'","'. . mode''. form .'"]}
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
    >
     
      <Button style={{placeSelf:"Flex-Start",justifySelf:"Flex-End"}} gridArea="mode" w="50px" variant="ghost" onClick={toggleColorMode}>
          {colorMode === "light" ? <FiSun size="80px"/>:<FiMoon size="80px"/>}
        </Button>
      <Flex 
        as="form"
        gridArea="form"
        width="100%"
        backgroundColor={useColorModeValue("#7B3FBA","#262626")}
        borderRadius="md"
        border="1px solid"
        borderColor={useColorModeValue("","#d9d9d9")}
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
      <form method='post' action='/api/auth/callback/credentials'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <label color="black" m="10px 0">Usuário</label>
      <Input id="usuário" bgColor="#f5f5f5" m="5px 0"  type="text" name='usuário' _placeholder={{color:"Gray"}} color="black" placeholder="Skap Streaming"/>
      <label color="black" m="10px 0">Senha</label>
      <InputGroup size="lg" m="5px 0">
      <Input id="senha" type={pass} bgColor="#f5f5f5" name='senha' color="black" _placeholder={{color:"Gray"}} placeholder="123456" />
      <InputRightElement>
        <Button bg="none" minW="none" _hover={{bg:"none",_focus:"none"}} _focus="none" onClick={()=>{if(show==false){seticon(<FaRegEye color="black"/>);setpass("text");setshow(true)}else{seticon(<FaRegEyeSlash color="black"/>);setpass("password");setshow(false)}}}>
          {icon}
        </Button>
      </InputRightElement>
    </InputGroup>
      <Button
          type="submit"
          leftIcon={<FiUser/>}
          backgroundColor="red.500"
          height="50px"
          w="100%"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'red.600' }}
        >
          Logar
        </Button>
        <Text
          textAlign="center"
          fontSize="sm"
          color={color}
          marginTop={6}
          cursor="pointer"
        >
          Não tem uma conta? {" "}
          
        </Text>
        
    </form>
    <Divider/>
          <Flex w="100%" justifyContent="center" alignItems="center">
          <form method='post' action='/api/auth/signin/twitch'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Twitch" aria-label="Twitch">
          <Button justifyContent="center" type="submit" h="50px"  m="10px 0" bg="none">{<FaTwitch size="30px"/>}</Button>
          </Tooltip>
          </form>
          <form method='post' action='/api/auth/signin/facebook'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Facebook" aria-label="Facebook">
            <Button justifyContent="center" type="submit" h="50px" m="10px 0" bg="none">{<FaFacebook size="30px"/>}</Button>
          </Tooltip>
          </form>
          <form method='post' action='/api/auth/signin/discord'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Discord" aria-label="Discord">
            <Button justifyContent="center" type="submit" h="50px" m="10px 0" bg="none">{<FaDiscord size="30px"/>}</Button>
          </Tooltip>
          </form>
          </Flex>
      </Flex>
    </Grid>
  )
 
}

Login.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}