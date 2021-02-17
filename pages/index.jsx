import {Grid,Flex, Spinner,Heading, Button, Box,Image,Text, SimpleGrid, useColorModeValue, Avatar} from "@chakra-ui/react";
import React from 'react';
import Navmenu from "../components/navmenu";
import { getSession } from "next-auth/client";


Home.getInitialProps= async(ctx)=>{
  const res = getSession(ctx);
  return { session: await res }
}



export default function Home({session}){

 
return (<>
     
        <Grid
        h="100vh"
        templateColumns="100px 1fr"
        templateRows="70px 1fr"
        templateAreas={'"nav nav""content content"'}
        overflow="auto"
        >
         
       

<Navmenu></Navmenu>

     <Flex
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="30px"
     >
       
  
        <SimpleGrid columns={[1,2,2,4]} spacing={10} columnGap={15}>
        
       <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>

      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>
      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>

      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>
      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>

      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>
      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>

      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>
      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>

      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>
      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/sWN7WhZJCARZtluWXkxcH9pzF1RpvZJFG4A3HWOWFLs/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>

      <Box  w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Image cursor="pointer" w="100%" h="80%" borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = "https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/animated.gif?width=300&height=160"}} onMouseLeave={(e)=>{e.currentTarget.src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"}} src="https://image.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc/thumbnail.png?width=300&height=160&fit_mode=smartcrop"></Image>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Avatar  gridArea="avatar" name="Nome Autor"></Avatar>
        <Text gridArea="nome" noOfLines={2} marginLeft="10px"><strong>Nome do vídeo pode ser grande mas as pessoas deveriam escolher melhor dada dskhalk sadkjasd asjdasjs dskjflskdjflskdjflskdjflksdjfsd</strong></Text>
        <Text  marginTop="10px" marginLeft="10px" gridArea="author">Autor</Text>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">200 views - 12 Horas Atrás</Text>
        </Grid>
        </Flex>
      </Box>
      
      </SimpleGrid>








       </Flex>
       
      
     </Grid>
    
   
    </>


    )}

    



