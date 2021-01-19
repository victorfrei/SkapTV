import { Divider, Grid,Flex, useColorModeValue, } from "@chakra-ui/react";
import { useSession } from "next-auth/client"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Avatar,
    Text,
    Button,
    ButtonGroup
  } from "@chakra-ui/react"
import { FaSignInAlt } from "react-icons/fa";
import { useRouter } from "next/router";


export default function Account(){
    const [session] = useSession();
    const { isOpen,onClose } = useDisclosure({isOpen:true})
    const router = useRouter();



    return(<>
    {session && 
     <Grid templateColumns={["20% 1fr","40% 1fr" ,"20% 1fr"]} h="100vh" w='100vw' templateAreas="'sidebar .'">
        <Flex flexDir="column" gridArea="sidebar" h="100%" w="100%" alignItems="center" justifyContent='center' borderRight="1px solid"  borderRightColor={useColorModeValue("gray.700","gray.700")}>
        <Flex flexDir="column" mt="-150px" w="100%" h="100%" border="none">
        <Divider/>
        <ButtonGroup flexDir="column" mt="100px" >
        <Button m="10px" size="md" >Minhas Informações</Button>
        <Button m="10px" size="md">Métodos de Pagamento</Button>
        <Button m="10px" size="md"></Button>
        <Button m="10px" size="md"></Button>
        </ButtonGroup>
        
        </Flex>
        <Divider/>
         </Flex>
         <Flex>

         </Flex>
     </Grid>
    
    }
    {!session &&
        <Modal closeOnOverlayClick={false} size="xl" m="100px" h="50px" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalBody textAlign="center">
        <Flex flexDirection="column" alignItems="center" h="100%" padding="10px">
        <Text m="10px"><strong>Você não está logado!!</strong></Text>
        <Avatar name="Guest" size="xl"></Avatar>
        <Text fontSize="20px" >Guest</Text>
        <h1 style={{margin:"40px 0", fontSize:"25px"}}><strong>Você precisa está logado para ver informações de sua conta!</strong></h1>
        <Button onClick={()=>{router.replace("/login")}} rightIcon={<FaSignInAlt/>}>Ir para página de Login</Button>
        </Flex>
        </ModalBody>
        </ModalContent>
        </Modal>
    
    
    }
    </>)}