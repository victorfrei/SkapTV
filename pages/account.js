import {Avatar,useToast,Grid,Flex,GridItem,Heading} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useEffect,useState} from 'react'
import Axios from 'axios';


export default function account(){
    const [Profile,setProfile] = useState("");
    const [Nick,setNick] = useState("");
    const toast = useToast();
    const router = useRouter();
    
const alert = (data,duration,closable,status) =>{
    toast({
       description:data,
      status:status,
      duration: duration,
      position:"top",
      isClosable: closable,
    })
  return 0;
  }


useEffect(()=>{
    Axios.post("/api/verify",{key:localStorage.getItem("PublicKey")==null?"0001":localStorage.getItem("PublicKey")})
    .then((data)=>{
        if(data.data.valid){
        setProfile(data.data.values.data.Profile);
        setNick(data.data.values.data.Nick);
        
        }else{
        alert(data.data.msg,8000,true,"error");
        setTimeout(()=>{},1000);
        router.replace("/login");
        }
    })
},[router.pathname]);


    return <>
    <Grid>
    <Flex direction="column" alignItems="center" margin="20px">
    <Avatar src={Profile} size="2xl" ></Avatar>
    <Heading>{Nick}</Heading>
    </Flex>
    </Grid>



    </>
}