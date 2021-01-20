import {Flex,Stack,HStack, Heading, Input } from "@chakra-ui/react";
import { useSession } from "next-auth/client"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    
    useDisclosure,
    Avatar,
    Text,
    Button,
    
  } from "@chakra-ui/react"
import { FaCogs, FaInfoCircle, FaRegCreditCard, FaRegUser, FaSignInAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Progress,Select } from "@chakra-ui/react"
import Navmenu from "../components/navmenu";


export default function Account(){
    const [session, loading] = useSession();
    const { isOpen,onClose } = useDisclosure({isOpen:true})
    const router = useRouter();

    return(<>
    {session && <>
    <Tabs >
        <Navmenu navmenu={false}></Navmenu>
    </Tabs>
        <Tabs paddingTop="70px" isFitted variant="enclosed" w="85%" m="0 auto">
        <TabList mb="1em">
        <Tab><HStack spacing="20px"><FaRegUser size="20px" style={{marginLeft:"10px"}}/><Text>Minha conta</Text></HStack></Tab>
        <Tab isDisabled><HStack spacing="20px"><FaCogs size="20px" style={{marginLeft:"10px"}}/><Text>Configurações de Conta</Text></HStack></Tab>
        <Tab><HStack spacing="20px"><FaRegCreditCard size="20px" style={{marginLeft:"10px"}}/><Text>Informações de Pagamentos</Text></HStack></Tab>
        <Tab><HStack spacing="20px"><FaInfoCircle size="20px" /> <Text>Ajuda</Text></HStack></Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
        <Flex flexDir="column" alignItems="center">
            <Avatar size="xl" src={session.user.image} name={session.user.name}></Avatar>
            <Heading m="20px">{session.user.name}</Heading>
           <Flex as="form">
               <Flex flexDir="column" m="10px">
               <Stack spacing="10px" m="10px">
               <label>NickName</label>
               <Input name="name" value={session.user.name} type="text" placeholder="João"></Input>
               </Stack>
               <Stack spacing="10px" m="10px">
               <label>Email</label>
               <Input name="email" value={session.user.email} type="email" placeholder="João@exemplo.com"></Input>
               </Stack>
               <Stack spacing="10px" m="10px">
               <label>Visibilidade da Conta</label>
               <Select placeholder="Selecione uma opção">
                <option selected value="Publico">Público</option>
                <option value="Privado">Privado</option>
                </Select>
               </Stack>
               </Flex>
               <Flex flexDir="column" m="10px">
               <Stack spacing="10px" m="10px">
               <label>Senha Atual</label>
               <Input name="Asenha" type="password" placeholder="Digite sua senha atual"></Input>
               </Stack>
               <Stack spacing="10px" m="10px">
               <label>Senha</label>
               <Input name="senha" type="password" placeholder="Digite sua senha"></Input>
               </Stack>
               <Stack spacing="10px" m="10px">
               <label>Confirmar Senha</label>
               <Input name="csenha" type="password" placeholder="Confirme sua senha"></Input>
               </Stack>
               </Flex>
               </Flex> 
               <Stack spacing="10px" m="10px">
                <Button colorScheme="green" size="lg">Atualizar</Button>
               </Stack>
               
            
        </Flex>
        </TabPanel>
        <TabPanel>
        <p>two!</p>
        </TabPanel>
        </TabPanels>
</Tabs>

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
        <h1 style={{margin:"40px 0", fontSize:"25px"}}><strong>Você precisa está logado para ver informações de sua conta!</strong></h1>
        <Button onClick={()=>{router.replace("/login")}} rightIcon={<FaSignInAlt/>}>Ir para página de Login</Button>
        </Flex>
        </ModalBody>
        </ModalContent>
        </Modal>
    
    
    }
    {loading &&
    <Progress size="xl" isIndeterminate />
    }
    </>)}