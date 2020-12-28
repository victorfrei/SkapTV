
import {Box,Flex, SkeletonCircle, Skeleton, SkeletonText,Link,Text,Avatar,Image } from "@chakra-ui/react";




export default function Thumbnail(props) {
 /*
PROPS
isloaded -> verifica se o conteúdo foi carregado



 */

    return (
      <Box  hidden={props.isloaded} w="250px" h="300px" margin="20px" >
        <Box>
        <Skeleton isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" height="140px" borderRadius="10px">
        </Skeleton>
        </Box>
        <Flex margin="10px 20px 20px 5px" flexDirection="column" alignItems="flex-start">
        <SkeletonText isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" w="100%">
        </SkeletonText>
        <Flex marginTop="10px" >
          <SkeletonCircle isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" size="10" mr="10px">
            </SkeletonCircle>
          <Flex flexDirection="column">
          <SkeletonText isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" w="50px" mt="10px" noOfLines={1} >
            </SkeletonText>
          <SkeletonText isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" w="50px" mt="5px" noOfLines={1} >
            </SkeletonText>
          </Flex>
        </Flex>
        </Flex>
      </Box>
       
    )
  }