import {Grid,Flex, Spinner,Heading, HStack, Box,Image,Text, SimpleGrid} from "@chakra-ui/react";
import React from 'react';
import Navmenu from "../components/navmenu";
import SideBar from "../components/sidebar";
import {
  Tag,
  TagLabel,
} from "@chakra-ui/react"
import { getSession } from "next-auth/client";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react"
import { render } from "react-dom";







export default class Home extends React.Component{

  static async getInitialProps(ctx) {
    const res = getSession(ctx);
    return { session: await res }
  }

  state={
    preview: <div></div>,
    open: true
  }


 Preview(){
    console.log(this.state)

  return (
      <>
      
       <Drawer onClose={()=>{}} isOpen={this.state.open} size="md">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader>{`drawer contents`}<CloseButton onClick={()=>{this.setState({open:false})}}></CloseButton></DrawerHeader>
              <DrawerBody>
                {`Conteúdo do curso`}
              </DrawerBody>
              
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
   
  }




render(){
return (<>
     
        <Grid
        h="100vh"
        templateColumns="100px 1fr"
        templateRows="70px 1fr"
        templateAreas={'"side nav""side content"'}
        >
         
       

<Navmenu></Navmenu>
<SideBar></SideBar>

     <Flex
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="50px"
     >
       
       
       <Flex w="100%" m="0 40px" flexDirection="column">
       {this.props.session && <>
       <Heading m="10px 0">Olá, {this.props.session.user.name}!</Heading>
        {this.state.preview}
      
      <HStack>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Início</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Cursos</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Categorias</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Aulas</TagLabel>
       </Tag>
       </HStack>
       </>
          }
        <SimpleGrid mt="20px" columns={4} spacing={10}>
        
       <Box  w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image onClick={()=>{this.setState({preview:this.Preview()})}} cursor="pointer" src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>

      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="250px" h="auto" bg="#ffffff" borderRadius="30px" padding="5px">
        <Flex w="100%" flexDir="column" color="black" padding="5px">
        <Image src="/linguagem-c.png" borderTopRadius="30px"></Image>
        <Text> Linguagem C - Estrutura de Dados</Text>
        <Flex justify="flex-start" m="0 10px" > 
        <Flex mr="10px"><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path fill="#e5e619" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>4.2</Flex>
        <Flex><svg width="20px" style={{marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>4h 20m</Flex>
        </Flex>
        </Flex>
      </Box>
      </SimpleGrid>








       </Flex>
       
     </Flex>   
     </Grid>
    
   
    </>


    )}

    

}


