
import {Box,Flex, SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useState } from "react";



export default function Thumbnailske() {
  const [isloaded,setisloaded] = useState(false);
  
 

    return (
      <Box w="250px" h="300px" margin="20px" >
        <Box>
        <Skeleton isLoaded={isloaded} startColor="#6D5DD3" endColor="black.800" height="140px" borderRadius="10px"></Skeleton>
        </Box>
        <Flex margin="10px 20px 20px 5px" flexDirection="column" alignItems="flex-start">
        <SkeletonText isLoaded={isloaded} startColor="#6D5DD3" endColor="black.800" w="100%"></SkeletonText>
        <Flex marginTop="10px" >
          <SkeletonCircle isLoaded={isloaded} startColor="#6D5DD3" endColor="black.800" size="10" mr="10px"></SkeletonCircle>
          <Flex flexDirection="column">
          <SkeletonText isLoaded={isloaded} startColor="#6D5DD3" endColor="black.800" w="50px" mt="10px" noOfLines={1} ></SkeletonText>
          <SkeletonText isLoaded={isloaded} startColor="#6D5DD3" endColor="black.800" w="50px" mt="5px" noOfLines={1} ></SkeletonText>
          </Flex>
        </Flex>
        </Flex>
      </Box>
       
    )
  }