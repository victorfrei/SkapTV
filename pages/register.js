import React, {useState } from 'react';
import {Grid, Flex, Link, Button, Text, useToast,Alert,AlertIcon} from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
//import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import {useRouter} from 'next/router'

import Axios from 'axios';



export default function Register(props) {

  const color = useColorModeValue("white","gray.300");
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast();
  const router = useRouter();
  let [Nick,setNick] = useState("");
  let [Email,setEmail] = useState("");
  const [Pass,setPass] = useState("");
  const [confirm,setconfirm] = useState("");


  const fre = (data,status) =>{
    toast({
      description: data,
      status: status,
      duration: 9000,
      position:"top",
      isClosable: true
    })}

 
 async function Registrar(){
      
    if(Pass == "" && Email =="" && Nick==""){
        fre("Não há dados!!","warning");
      }else{
        if(Pass == confirm){
          Nick = Nick.toLowerCase();
          Email = Email.toLowerCase();
          fre("Criando conta...","info")
     await Axios.post(`/api/v2/user?type=2`,{Nick,Email,Pass})
      .then((data)=>{
        console.log(data);
      })
      
   }
  }
}




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
        backgroundColor={useColorModeValue("gray.700","gray.700")}
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={12}
      >
      
        <Input
          placeholder="Nickname"
          onChange={(e)=>{setNick(e.target.value)}}
        />
        
        <Input
          placeholder="Email"
          marginTop={2}
          onChange={(e)=>{setEmail(e.target.value)}}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e)=>{setPass(e.target.value)}}
          autoComplete="senha"
          marginTop={2}
        />
        <Input
          id="senhaconfirm"
          placeholder="Confirme sua senha"
          type="password"
          autoComplete="senha"
          onChange={(e)=>{setconfirm(e.target.value)}}
          marginTop={2}
        />


        <Button
          leftIcon={<FiUser/>}
          backgroundColor="red.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          
          onClick={(e)=>{
            Registrar();
          }}
          _hover={{ backgroundColor: 'red.600' }}
        >
          Registrar
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color={color}
          marginTop={6}
        >
          já tem uma conta? {" "}
          <Link
            color="white.600"
            fontWeight="bold"
            href="/login"
            _hover={{ color: 'white.500' }}
          >
            Logar
          </Link>
        </Text>

        <Divider />

        {/* <Flex alignItems="center" >
          <Text fontSize="sm" color={color}>Ou</Text>
           <Button
            leftIcon={<SiGoogle/>}
            height="50px"
            flex="1"
            backgroundColor={useColorModeValue("white.600","gray.600")} 
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: useColorModeValue("white.600","gray.600") }}
          >
            Cadastrar com a Google
          </Button>
          
        </Flex> */}
      </Flex>
    </Grid>
  )
}

