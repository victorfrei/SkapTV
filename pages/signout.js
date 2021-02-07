import {csrfToken, useSession} from 'next-auth/client';
import {Flex,Button, Avatar,Text, ButtonGroup, Link,Box,useDisclosure} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
  import {FaSignInAlt, FaSignOutAlt,FaTimes} from "react-icons/fa";



export default function SignOut({csrfToken}){
    const [session] = useSession();
    const router = useRouter();
    const { isOpen,onClose } = useDisclosure({isOpen:true})


return (<>
{session && <>
      
  
        <Modal closeOnOverlayClick={false} size="xl" m="100px" h="50px" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <ModalBody textAlign="center">
    <Flex flexDirection="column" alignItems="center" h="100%" padding="10px">
    <Text m="10px">Logado como:</Text>
    <Avatar src={session.user.image} name={session.user.name} size="xl"></Avatar>
    <Text fontSize="20px" >{session.user.name}</Text>
    <h1 style={{margin:"40px 0", fontSize:"30px"}} ><strong>Você tem certeza que deseja sair?</strong></h1>
    <form action="http://localhost:3000/api/auth/signout" style={{width:"100%"}} method="POST">
    <input type="hidden" name="csrfToken" value={csrfToken}/>
    <ButtonGroup m="10px">
    <Button onClick={()=>{router.replace("/")}} leftIcon={<FaTimes/>}>Cancelar</Button>
    <Button type="submit" leftIcon={<FaSignOutAlt/>}>Sair</Button>
    </ButtonGroup>
    </form>
    </Flex>
    </ModalBody>
    </ModalContent>
    </Modal>
 
</>
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
<h1 style={{margin:"40px 0", fontSize:"25px"}} >Você precisa está logado para <strong>Sair</strong>!</h1>
<form action="http://localhost:3000/api/auth/signout" style={{width:"100%"}} method="POST">
<input type="hidden" name="csrfToken" value={csrfToken}/>
<ButtonGroup m="10px">
<Button onClick={()=>{router.replace("/login")}} rightIcon={<FaSignInAlt/>}>Ir para página de Login</Button>
</ButtonGroup>
</form>
</Flex>
</ModalBody>
</ModalContent>
</Modal>
}
</>
)

}


SignOut.getInitialProps = async (context) => {
    return {csrfToken: await csrfToken(context)}
}