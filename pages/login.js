// import Head from 'next/head'

import {Grid, Flex, Link, Button,useToast, Text} from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
//import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import { useState } from 'react';
import Axios from 'axios';
import {useRouter} from 'next/router';

export default function Login(props) {
  const router = useRouter();
  const toast = useToast();
  let [Email , setEmail] = useState("");
  const [Pass,setPass] = useState("");
  const color = useColorModeValue("white","gray.300");
  const { colorMode, toggleColorMode } = useColorMode()
  
    let fre = (data,status,title) =>{
      toast({
        title: title,
        description: data,
        status: status,
        duration: 9000,
        position:"top",
        isClosable: false
      })}

  
      


function Login(){
        
   if(Email =="" && Pass==""){

    fre("Não há dados inseridos!","warning","O login Falhou!");

   }else{
    Email = Email.toLowerCase();
  
    Axios.post(`/api/v2/user?type=1`,{Email ,Pass})
    .then((data)=>{
      console.log(data);
      if(data.data.type==1){
     fre("Login Feito com Sucesso",'success','');
      }else if(data.data.type==2){
        fre("Email ou Senha estão incorretos!",'warning','Requer Atenção');
      }else if(data.data.type==3){
        fre("É necessário verificar o email para logar!!",'warning','Requer Atenção');
      }
    })
  
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
        padding={16}
      >
      <Input
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          placeholder="Email"
          
        />

        <Input
          onChange={(e)=>{
            setPass(e.target.value);
          }}
          placeholder="Senha"
          autoComplete="Senha"
          type="password"
          marginTop={2}
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="red.600"
          fontWeight="bold"
          _hover={{ color: 'red.400' }}
        >
          Esqueci minha senha
        </Link>
        <Button
        
          leftIcon={<FiUser/>}
          backgroundColor="red.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          onClick={()=>{
            Login();
          }}
          _hover={{ backgroundColor: 'red.600' }}
        >
          ENTRAR
        </Button>
        <Text
          textAlign="center"
          fontSize="sm"
          color={color}
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="white.600"
            fontWeight="bold"
            href="/register"
            _hover={{ color: 'white.500' }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />
{/* 
        <Flex alignItems="center">
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
            Entre com a Google
          </Button>
          
        </Flex> */}
      </Flex>
    </Grid>
  )
 
}
