
import {Box,Text,Flex, SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/react";
import ReactPlayer from 'react-player';

export default function Spotlight(props) {
    
  

    return (
      <Box w="600px" h="300px" margin="20px" >
       <Skeleton isLoaded={props.isloaded} startColor="#6D5DD3" endColor="black.800" height="100%" borderRadius="10px">
         <ReactPlayer muted style={{PointerEvent:"none"}} loop={true} playing={true} width="550px" url="https://stream.mux.com/QoRS84f02ZbC702c6hUq01CzNLrOdmARzXkNP02018w00kTUU.m3u8"></ReactPlayer>
       </Skeleton>
       
      </Box>
       
    )
  }