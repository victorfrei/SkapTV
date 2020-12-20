
import {Flex, Skeleton, SkeletonCircle} from "@chakra-ui/react";


export default function Channelspotlight() {
   

    return (
      
        <Flex alignItems="center" m="20px">
            <SkeletonCircle startColor="#6D5DD3" endColor="black.800" m="20px" size={36}></SkeletonCircle>
            <Skeleton startColor="#6D5DD3" endColor="black.800" m="20px" w="400px" h="20px"></Skeleton>
        </Flex>
      
       
    )
  }