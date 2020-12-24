
import {Flex, Skeleton, SkeletonCircle,Avatar,Heading} from "@chakra-ui/react";


export default function Channelspotlight(props) {
   /*
    PROPS
    name -> nome do dono do canal
    src -> fonte da imagem do canal
    isloaded -> verificação para saber se o conteúdo já foi carregado
    
   */

    return (
      
        <Flex alignItems="center" m="20px">
            <SkeletonCircle isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" m="20px" size={36}>
            <Avatar size="2xl" m="20px" name={props.name} src={props.src}></Avatar>
            </SkeletonCircle>
            <Skeleton  isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800"  m="20px" w="400px" h="20px">
            <Heading ml="-350px" justifyContent='center' size="lg">{props.name}</Heading>
            </Skeleton>
        </Flex>
      
       
    )
  }