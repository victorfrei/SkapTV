
import {Box,Flex, SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/react";


export default function Category() {
 

    return (
      <Box w="200px" h="300px" margin="20px" >
        <Box>
        <Skeleton startColor="#6D5DD3" endColor="black.800" height="280px" borderRadius="10px"></Skeleton>
        </Box>
        </Box>
       
    )
  }