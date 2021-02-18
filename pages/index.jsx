import {Grid,Flex, Spinner,Heading, Button, Box,Image,Text, SimpleGrid, useColorModeValue, Avatar, Link} from "@chakra-ui/react";
import React from 'react';
import Navmenu from "../components/navmenu";
import mongoose from 'mongoose';
import TimeAgo from 'react-time-ago';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale("pt-br")





const Videos = new mongoose.Schema(
{
  VideoID:String,
  Owner:{Name:String,Image:String},
  Data:{type:Date,default:Date.now()},
  Name:String,
  Views:Number,
  Likes:Number,
  Comments:{PostedBy:{Name:String,Image:String,Comment:String}}

}
)




export async function getStaticProps(){
  const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
  const data = conn.model("videos",Videos);
  const trending = await data.find().sort({Views:-1});
  const newest = await data.find().sort({Data:-1});
  const mostliked = await data.find().sort({Likes:-1});

return {
  props:{
    Trending:JSON.stringify(trending,null,0),
    Newest:JSON.stringify(newest,null,0),
    MostLiked:JSON.stringify(mostliked,null,0),
  
  
  },revalidate:3600
}
}


export default function Home({Trending,Newest,MostLiked}){
  const tre = JSON.parse(Trending);
  const nw = JSON.parse(Newest);
  const ml = JSON.parse(MostLiked);
  const trending = [];
  const newest = [];
  const mostliked = [];

  for(let x=0;x<tre.length;x++){
        

      trending.push(
        <Box  key={x} w="300px" h="265px" borderRadius="20px" bg={useColorModeValue("#a0a0a0","#2f2f2f")} color="white">
        <Flex w="100%" h="100%" flexDir="column" >
        <Link  w="100%" h="80%" href={`/watch/${tre[x].VideoID}`}><Image  borderTopRadius="20px" onMouseEnter={(e)=>{e.currentTarget.src = `https://image.mux.com/${tre[x].VideoID}/animated.gif?width=300&height=160`}} onMouseLeave={(e)=>{e.currentTarget.src=`https://image.mux.com/${tre[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}} src={`https://image.mux.com/${tre[x].VideoID}/thumbnail.png?width=300&height=160&fit_mode=smartcrop`}></Image></Link>
        <Grid w="100%" h="90%" justifyItems="start" alignItems="center" padding="5px" marginTop="10px"  templateColumns="50px 1fr 1fr" templateRows="40px 20px 20px"
        templateAreas='"avatar nome nome"". author ."". dados dados"'
        > 
        <Link href={`/channel/${tre[x].Owner.Name}`}><Avatar  gridArea="avatar" src={tre[x].Owner.Image} name={tre[x].Owner.Name}></Avatar></Link>
        <Link href={`/watch/${tre[x].VideoID}`}  gridArea="nome" ><Text noOfLines={2} marginLeft="10px"><strong>{tre[x].Name}</strong></Text></Link>
        <Link href={`/channel/${tre[x].Owner.Name}`} marginTop="10px" marginLeft="10px" gridArea="author"><Text>{tre[x].Owner.Name}</Text></Link>
        <Text marginTop="10px" marginLeft="10px" gridArea="dados">{tre[x].Views} views - {moment(tre[x].Data).fromNow()}</Text>
        </Grid>
        </Flex>
      </Box>
      )
      }



 
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
        
       {trending}

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

    



