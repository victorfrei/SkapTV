import {Box} from '@chakra-ui/react';
import {useToast,Tabs} from "@chakra-ui/react";
import Navmenu from '../../components/navmenu';


export default function watch(){
    const toast = useToast();
    
   

    const alertW = (data,duration,closable) =>{
        toast({
           description:data,
          status:"warning",
          duration: duration,
          position:"top",
          isClosable: closable
        })
      return 0;
      }

  
       

return (<div>
<Tabs w="100vw" variant="solid-rounded" align="center" colorScheme="blue">
<Navmenu navmenu={false} ></Navmenu>

 <div style={{marginLeft:"40px",marginRight:"auto",width:"65%"}}>
        
        <Box w="100%">
            <video margin="40px" controls src="/videos/teste.mp4"></video>
        </Box>
            
</div>
</Tabs>
</div>)}