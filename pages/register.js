import React, { useEffect } from 'react';
import {Grid, Flex, Link, Button, Text, useToast} from '@chakra-ui/react'
import Divider from '../components/Divider'
import Input from '../components/Input'
import {useColorModeValue,useColorMode} from '@chakra-ui/react';
import {SiGoogle} from 'react-icons/si';
import {FiUser,FiSun,FiMoon} from 'react-icons/fi';
import {HStack,PinInput, PinInputField } from "@chakra-ui/react"


import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Alert,
    AlertIcon,
  } from "@chakra-ui/react"
import Axios from 'axios';

export default function Home() {

  const color = useColorModeValue("white","gray.300");
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast();


  const fre = (data) =>{
    toast({
      title: "ATENÇÃO",
      description: data,
      status: "warning",
      duration: 9000,
      isClosable: true
    })}

  let register;
  useEffect(()=>{
   
    let Register = document.getElementById("register");
   
   register= ()=>{
      let Nick = document.getElementById("user");
      let Email = document.getElementById("email");
      let Pass = document.getElementById("senha");
      Nick = Nick.value;
      Email = Email.value;
      Pass = Pass.value;

     Axios.post("/api/register",{Nick,Email,Pass})
      .then((data)=>{
        if(data.data.err){
        fre(data.data.msg);
        }else{
          console.log("conta criada!")
        }
      });

     }

     


Register.onclick = register;

})




  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  


 
  
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


<AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirme Seu Email:
          </AlertDialogHeader>
          
            <AlertDialogBody>
            <Alert marginBottom="40px" status="info">
              <AlertIcon />
              Um email de confirmação foi enviado ao seu email!
              </Alert>
              
              <HStack>
              <PinInput colorScheme={useColorModeValue("black","white")} placeholder="*">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <strong>-</strong>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              </PinInput>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={onClose} >Renviar Email</Button>
              <Button colorScheme="gray" onClick={() =>
        toast({
          title: "🥳 Conta Criada 🥳",
          description: "Sua conta foi criada com sucesso!!",
          status: "success",
          duration: 10000,
          isClosable: true,
        })
      } ml={5}>
              Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>


      

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
