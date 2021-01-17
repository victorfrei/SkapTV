// import Head from 'next/head'

import {Grid, Flex, Link, Button,useToast, Text} from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
//import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import {csrfToken} from 'next-auth/client';


export default function Login({csrfToken}) {
  
  const toast = useToast();
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
      <form method='post' action='/api/auth/signin/email'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <label>Email</label>
      <Input id="email" type="text" name='email'placeholder="Email"/>
      
      <Button
          type="submit"
          leftIcon={<FiUser/>}
          backgroundColor="red.500"
          height="50px"
          w="100%"
          borderRadius="sm"
          marginTop={6}
          onClick={()=>{
            Login();
          }}
          _hover={{ backgroundColor: 'red.600' }}
        >
          Logar
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color={color}
          marginTop={6}
        >
          Não tem uma conta? {" "}
          
        </Text>
    </form>
      

        <Divider />

      </Flex>
    </Grid>
  )
 
}

Login.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}