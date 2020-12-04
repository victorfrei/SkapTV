
import { Avatar,Image, Badge, Box,Tooltip,Text } from "@chakra-ui/react";
import {FiCheckCircle } from "react-icons/fi";

export default function Video(props) {
    const property = {
      imgUrl: props.img,
      videoAlt: props.alt,
      category: props.category,
      title: props.title,
      }
  
    return (
      <Box margin="10px" zIndex="2" w="100%" maxW={["100%","18%"]} borderWidth="1px" borderColor="transparent" borderRadius="2xl" overflow="hidden">
        <Image w="100%" h="140px" src={property.imgUrl} alt={property.videoAlt} />
  
        <Box p="2" backgroundColor="#232b2b" p="20px" >
          <Box d="flex" flexDirection="column" alignItems="baseline">
              
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box
              d="flex"
              
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <Avatar src="#"></Avatar>
              <Box margin="5px">
              <Text>Canal
              <Tooltip label="Verificado!!" aria-label="verificado">
              <Badge variant="">
              <FiCheckCircle color="green" size="15px"/>
              </Badge>
              </Tooltip>
              </Text>
              {property.category}
              </Box>
             
            </Box>
          </Box>
          </Box>
  
         
          </Box>
       
    )
  }