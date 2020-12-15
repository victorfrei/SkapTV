
import { Avatar,Image, Box,Text,Flex,Link } from "@chakra-ui/react";


export default function Thumbnail(props) {
    const property = {
      title: props.title,
      category: props.category,
      img: props.img,
      link:props.link,
      date:props.date,
      views:props.views,
      duration:props.duration,
    }
  

    return (
      <Box w="300px" h="300px" margin="20px">
        <Box>
        <Link href={property.link}><Image src={property.img} borderRadius="10px" alt={property.title} w="100%" h="50%"></Image></Link>
        </Box>
        <Flex margin="10px 20px 20px 10px" flexDirection="column" alignItems="flex-start">
        <Text className="Skap_Text_Video" width="100%">{property.title}</Text>
        <Flex marginTop="10px" >
          <Avatar size="md"></Avatar>
          <Flex flexDirection="column">
          <Text className="Skap_Text_Video" width="100%" m="0 10px">User</Text>
          <Text className="Skap_Text_Video" width="100%" m="0 10px">{property.category}</Text>
          </Flex>
        </Flex>
        </Flex>
      </Box>
       
    )
  }