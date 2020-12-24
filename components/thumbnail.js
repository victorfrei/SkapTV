
import {Box,Flex, SkeletonCircle, Skeleton, SkeletonText,Link,Text,Avatar,Image } from "@chakra-ui/react";




export default function Thumbnail(props) {
 /*
PROPS
link -> link do video
img -> origem da imagem
title -> titulo do vídeo
isloaded -> verifica se o conteúdo foi carregado
user -> o dono do canal e vídeo
category -> categoria do vídeo


 */

    return (
      <Box w="250px" h="300px" margin="20px" >
        <Box>
        <Skeleton isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" height="140px" borderRadius="10px">
        <Link href={props.link}><Image src={props.img} borderRadius="10px" alt={props.title} w="100%" h="140px"></Image></Link>
        </Skeleton>
        </Box>
        <Flex margin="10px 20px 20px 5px" flexDirection="column" alignItems="flex-start">
        <SkeletonText isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" w="100%">
        <Text className="Skap_Text_Video" textAlign="start" width="100%">{props.title}</Text>
        </SkeletonText>
        <Flex alignItems="center" >
          <SkeletonCircle isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" size="10" mr="10px">
          <Avatar size="md"></Avatar>
          </SkeletonCircle>
          <Flex flexDirection="column">
          <SkeletonText isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" w="50px" mt="10px" noOfLines={1} >
          <Text width="500%" textAlign="start" m="0 10px">{props.user}</Text>
          </SkeletonText>
          <SkeletonText isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" w="50px" mt="5px" noOfLines={1} >
          <Text width="500%" textAlign="start" m="0 10px">{props.category}</Text>
          </SkeletonText>
          </Flex>
        </Flex>
        </Flex>
      </Box>
       
    )
  }