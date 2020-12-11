import {useRouter} from 'next/router';
import {useToast} from '@chakra-ui/react'
import {useState,useEffect} from 'react';
import Axios from 'axios';

export default function check(){
    const router = useRouter();
    const toast = useToast();
    
    

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
    const number = window.location.search.split("=")[1]
    Axios.post("/api/confirm",{Number:number,Token:localStorage.getItem("PublicKey")})
    .then((data)=>{
      if(data.data.User == null){
       alert(`${data.data}`,30000,true,"error");
      setTimeout(() => {
          router.replace("/");
      }, 4000);
       
      }
    
})
},router.pathname);


return<div></div> 
}