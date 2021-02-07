import {Grid,Flex, Spinner,Heading, HStack} from "@chakra-ui/react";
import React from 'react';
import Navmenu from "../components/navmenu";
import SideBar from "../components/sidebar";
import {
  Tag,
  TagLabel,
} from "@chakra-ui/react"
import { getSession } from "next-auth/client";



export default class Home extends React.Component{

constructor(props){
  super(props);
  this.state = {
    col: props.col,
    session: ""
  };
fetch("http://localhost:3000/api/auth/session").then(data=>{data.json().then((json)=>{this.setState({session:json.user})})})

}

componentDidMount(){
  const res = localStorage.getItem("collapsed")
  this.setState(()=>{return{col:res}})
}



render(){
return (<>
     
        <Grid
        className={this.state.col?"CollapsedGrid":""}
        h="100vh"
        templateColumns="150px 1fr"
        templateRows="70px 1fr"
        templateAreas={'"side nav""side content"'}
        >
         
       

<Navmenu></Navmenu>
<SideBar></SideBar>
     <Flex
      gridArea="content"
      display="flex"
      flexWrap="wrap"
      width="100%"
      justifyContent="center"
      mt="50px"
     >

       {this.state.session &&
       <Flex w="100%" m="0 40px" flexDirection="column">
       <Heading m="10px 0">Olá, {this.state.session.name}!</Heading>

      <HStack>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Início</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Cursos</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Categorias</TagLabel>
       </Tag>
       <Tag size="lg" bg="#D9B160" color="black" borderRadius="full">
       <TagLabel>Aulas</TagLabel>
       </Tag>
       </HStack>









       </Flex>
       }
     </Flex>   
     </Grid>
    
   
    </>


    )}

    

}


