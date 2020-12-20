
import {Box,Text,Flex, SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/react";


export default function Spotlight() {
    
  

    return (
      <Box w="600px" h="300px" margin="20px" >
       <Skeleton startColor="#6D5DD3" endColor="black.800" height="100%" borderRadius="10px"></Skeleton>
       
      </Box>
       
    )
  }