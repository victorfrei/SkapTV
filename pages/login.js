// import Head from 'next/head'

import {Grid, Flex, Link, Button, Text, Tooltip } from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import { useEffect } from 'react';
import Axios from 'axios';
import {useRouter} from 'next/router';



export default function Home() {
  let login;
  const router = useRouter();

 useEffect(()=>{
    let Login = document.getElementById("Login"); 
    let Nick = document.getElementById("nick");
    let Pass = document.getElementById("senha");

    Login.disabled = true;

    login = () => {
        Nick = Nick.value;
        Pass = Pass.value;
    Axios.post("/api/login",{Nick,Pass})
    .then((docs)=>{
      if(docs.data != "Login Denied!"){
      localStorage.setItem("PublicKey",docs.data);
      router.replace("/");
      }
    })
    .catch((err)=>{
      console.log(err);      
    })
  }

    const inputchange = () =>{
      if(Nick.value =="" || Pass.value =="" ){
          Login.disabled = true;
        }else{
          Login.disabled = false;
        }
    }


  Nick.addEventListener("change",inputchange);
  Pass.addEventListener("change",inputchange);
  Login.addEventListener("click",login);
  
  });

  const color = useColorModeValue("white","gray.300");
  const { colorMode, toggleColorMode } = useColorMode()

  
 

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
          {colorMode === "light" ? <FiMoon size="80px"/> : <FiSun size="80px"/>}
        </Button>
      <Flex 
        gridArea="form"
        width="100%"
        backgroundColor={useColorModeValue("gray.700","gray.700")}
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
       
        <Input
        id="nick"
          placeholder="nickname"
          
        />

        <Input
        id="senha"
          placeholder="Senha"
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
    <Tooltip hasArrow closeDelay={200} placement="right" label="Digite o nickname e senha para logar!">
        <Button
        id="Login"
          leftIcon={<FiUser/>}
          backgroundColor="red.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'red.600' }}
        >
          ENTRAR
        </Button>
        </Tooltip>
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
          
        </Flex>
      </Flex>
    </Grid>
  )
 
}
