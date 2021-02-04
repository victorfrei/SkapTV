import { Box,Button,Divider,Flex,Text,Grid } from "@chakra-ui/react";
import { FiBook, FiBookOpen, FiChevronsLeft, FiFile,FiHome } from "react-icons/fi";



export default function Sidebar(props){
   


return(<> 
<Box gridArea="side">

<Grid 
templateColumns="1fr"
templateRows="100px 1fr 2fr"
templateAreas={'"logo""navmenu1""navmenu2"'}
width="100%"
height="100%"
>
<Box gridArea="logo">
<Text>Logo</Text>
</Box>
<Flex gridArea="navmenu1" alignItems="flex-start" marginLeft="40px" justifyContent="flex-end" marginBottom="10px" flexDirection="column">
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiHome/>}>Inicío</Button>    
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiBook/>}>Cursos</Button>
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiBookOpen/>}>Meus Cursos</Button>
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiFile/>}>Provas</Button>
<Divider width="100%" height="5px"/>
</Flex>

<Flex gridArea="navmenu2" alignItems="flex-start" marginLeft="40px" flexDirection="column">
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiHome/>}>Inicío</Button>    
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiBook/>}>Cursos</Button>
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiBookOpen/>}>Meus Cursos</Button>
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}} leftIcon={<FiFile/>}>Provas</Button>
<Button borderRadius="0" bg="transparent" _hover={{borderRadius:"20px",backgroundColor:"transparent"}}><FiChevronsLeft/></Button>
</Flex>

</Grid>
</Box>

</>)}