// import Head from 'next/head'

import {Grid,Box, Flex, Tooltip,Image, Button,useToast,Input, Text, InputGroup, InputRightElement,Link} from '@chakra-ui/react'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import {csrfToken} from 'next-auth/client';
import { FaDiscord,FaFacebook,FaRegEye,FaRegEyeSlash,FaTwitch,FaGoogle } from "react-icons/fa";
import {useEffect, useState } from 'react';
import {useRouter} from 'next/router';

function sendmsg(msg){
  return (
    toast({
    title: "Register",
    description: msg,
    position: 'top',
    status: "warning",
    duration: 14000,
    isClosable: true,
  })
  )}





export default function Register({csrfToken}) {
  
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode()
  const [pass,setpass] = useState("password");
  const [icon,seticon] = useState(<FaRegEyeSlash color="black"/>);
  const [show,setshow] = useState(false)
  const [loading,setloading] = useState(false)
  const router = useRouter();

  useEffect(()=>{
   if(router.query.error=='true'){ 
       
    toast({
      title: "Cadastro",
      description: router.query.sms,
      position: 'top',
      status: "error",
      duration: 10000,
      isClosable: true,
    })
      
  }
  
  },[router.pathname])
  


return (
    <Grid
      height="100vh"
      templateColumns="1.7fr 1fr"
      templateAreas={"'image register'"}
      overflow='hidden'
      >
     
     <Box w="100%" bgImage={`url(/lr/1.jpg)`} gridArea="image" bgRepeat="no-repeat" bgSize="cover"></Box>


      {/* <Button style={{placeSelf:"Flex-Start",justifySelf:"Flex-End"}} gridArea="mode" w="50px" variant="ghost" onClick={toggleColorMode}>
          {colorMode === "light" ? <FiSun size="80px"/>:<FiMoon size="80px"/>}
        </Button> */}
      <Flex 
        gridArea="register"
        width="100%"
        borderRadius="md"
        flexDir="column"
        alignItems="center"
        padding={16}
      >


      <Image src="/icons/logo.png" width="100px" marginBottom="10px"></Image>
      <form method='post' id="registerform" action='/api/auth/callback/credentials'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <input name="register" type="hidden" defaultValue={true}></input>
      <label color="black" m="10px 0">Nickname</label>
      <Input id="name" autoComplete="on" bgColor="#f5f5f5" m="5px 0"  type="text" name='name' _placeholder={{color:"Gray"}} color="black" placeholder="TigerTayzen"/>
      <label color="black" m="10px 0">Email</label>
      <Input id="email" autoComplete="on" bgColor="#f5f5f5" m="5px 0"  type="email" name='email' _placeholder={{color:"Gray"}} color="black" placeholder="exemplo@email.com"/>
      <label color="black" m="10px 0">Senha</label>
      <InputGroup size="lg" m="5px 0">
      <Input id="pass" autoComplete="on" type={pass} bgColor="#f5f5f5" name='pass' color="black" _placeholder={{color:"Gray"}} placeholder="Sua senha" />
      <InputRightElement>
        <Button bg="none" minW="none" _hover={{bg:"none"}} _focus={{display:'none'}} onClick={()=>{if(show==false){seticon(<FaRegEye color="black"/>);setpass("text");setshow(true)}else{seticon(<FaRegEyeSlash color="black"/>);setpass("password");setshow(false)}}}>
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
          isLoading={loading}
          onClick={()=>{if(loading==false){setloading(true)}else{setloading(false)} document.getElementById('registerform').submit();}}
        >
          Registrar 
        </Button>
        <Text
          textAlign="center"
          fontSize="sm"
          marginTop={6}
          onClick={()=>{router.push("/login")}}
          cursor="pointer"
        >
        Já tem uma conta? Fazer Login!
          
        </Text>
        
    </form>
    
    
    <Flex w="100%" justifyContent="center" alignItems="center">
          <form method='post' action='/api/auth/signin/twitch'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Twitch" aria-label="Twitch">
          <Button onClick={()=>{if(loading==false){setloading(true)}}} justifyContent="center" type="submit" h="50px"  m="10px 0" bg="none">{<FaTwitch size="30px"/>}</Button>
          </Tooltip>
          </form>
          <form method='post' action='/api/auth/signin/facebook'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Facebook" aria-label="Facebook">
            <Button onClick={()=>{if(loading==false){setloading(true)}}} justifyContent="center" type="submit" h="50px" m="10px 0" bg="none">{<FaFacebook size="30px"/>}</Button>
          </Tooltip>
          </form>
          <form method='post' action='/api/auth/signin/discord'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Discord" aria-label="Discord">
            <Button onClick={()=>{if(loading==false){setloading(true)}}} justifyContent="center" type="submit" h="50px" m="10px 0" bg="none">{<FaDiscord size="30px"/>}</Button>
          </Tooltip>
          </form>
          <form method='post' action='/api/auth/signin/google'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <Tooltip label="Google" aria-label="Google">
            <Button onClick={()=>{if(loading==false){setloading(true)}}} justifyContent="center" type="submit" h="50px" m="10px 0" bg="none">{<FaGoogle size="30px"/>}</Button>
          </Tooltip>
          </form>
          </Flex>
      </Flex>
    </Grid>
  )
 
}

Register.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}