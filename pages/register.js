import React, { useEffect } from 'react';
import {Grid, Flex, Link, Button, Text, useToast} from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import {useRouter} from 'next/router'

import Axios from 'axios';

export default function Home() {

  const color = useColorModeValue("white","gray.300");
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast();
  const router = useRouter();

  const fre = (data,status) =>{
    toast({
      title: "ATENÇÃO",
      description: data,
      status: status,
      duration: 9000,
      position:"top",
      isClosable: true
    })}

  let register;
  useEffect(()=>{
    let Register = document.getElementById("register");

    
    
   register= ()=>{
      
    let Nick = document.getElementById("user");
    let Email = document.getElementById("email");
    let Pass = document.getElementById("senha");
    let confirm = document.getElementById("senhaconfirm");

    if(Pass.value==confirm.value){

      
      Nick = Nick.value;
      Email = Email.value;
      Pass = Pass.value;


      if(Pass.value == "" && Email.value =="" && Nick.value==""){
        console.log("campos vazios!!");
      }else{
        
     Axios.post("/api/register",{Nick,Email,Pass})
      .then((data)=>{
        if(data.data.err){
        fre(data.data.msg,"warning");
        }else{
          fre("Conta feita com sucesso!!","success");
          localStorage.setItem("PublicKey",data.data);
          setTimeout(()=>{},4000);
          router.replace("/");
        }
      });
   
    }
  }else{
    fre("As senhas não coincidem!","warning")
   } 
  }

Register.onclick = register;

});


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
        gridArea="form"
        width="100%"
        backgroundColor={useColorModeValue("gray.700","gray.700")}
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={12}
      >

        <Input
          id="user"
          placeholder="nickname"
        />

        <Input
        id="email"
          placeholder="Email"
          marginTop={2}
        />

        <Input
          id="senha"
          placeholder="Senha"
          type="password"
          
          marginTop={2}
        />
        <Input
          id="senhaconfirm"
          placeholder="Confirme sua senha"
          type="password"
          marginTop={2}
        />


        <Button
          id="register"
          leftIcon={<FiUser/>}
          backgroundColor="red.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
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

        <Flex alignItems="center" >
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
          
        </Flex>
      </Flex>
    </Grid>
  )
}
