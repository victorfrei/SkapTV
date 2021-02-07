import { Box,Link,Tooltip,Image,Flex, List, ListItem,Button,Text, useColorModeValue } from "@chakra-ui/react";






export default class SideBar extends React.Component{

    static async getInitialProps(ctx) {
        const res = getSession(ctx);
        return { session: res }
      }

    constructor(props) {
        super(props);
        this.state = {
          col: false,
        };
      }

render(){
    return(
        <Flex gridArea="side" bg="#1A202C" width="100px" height="100%" position="fixed" color="#f2f2f2" className={this.state.col==true?"":"Collapsed"}  flexDir="column" justifyContent="space-between" alignContent="space-between">
        <Flex alignItems="center"  h="70px" justifyContent="center"> 
        <Link href="/"><Tooltip label="Skap"><Image  src="/icons/logo.png" width="50px"/></Tooltip></Link>
        </Flex>
        <Flex alignItems="center" h="450px" flexDir="column" mt="20px">
        <Box>
        <Button className={this.state.col==true?"":"CollapsedBut"} bg="transparent" borderRadius="xl" iconSpacing={0}><svg width="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg></Button>
        </Box>
        <span hidden={!this.state.col}>Início</span>
        <Box>
        <Button className={this.state.col==true?"":"CollapsedBut"} bg="transparent" borderRadius="xl" iconSpacing={0}><svg width="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg></Button>
        </Box>
        <span hidden={!this.state.col}>Cursos</span>
        <Box>
        <Button className={this.state.col==true?"":"CollapsedBut"} bg="transparent" borderRadius="xl" iconSpacing={0}><svg width="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg></Button>
        </Box>
        <span hidden={!this.state.col}>Anotações</span>
        </Flex>

        <Flex textAlign="center" justifyContent="center" mb="20px">
        {this.state.col==true?<svg cursor="pointer" onClick={()=>{this.setState(()=>{return {col:false}});localStorage.setItem("collapsed",true)}} width="23px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>:<svg cursor="pointer" width="23px" onClick={()=>{this.setState(()=>{return {col:true}});localStorage.setItem("collapsed",false)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>}
        </Flex>
        
        </Flex>
        )}
}