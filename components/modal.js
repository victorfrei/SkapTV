import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Button,
  } from "@chakra-ui/react";
  import { Radio, RadioGroup,Flex,Text,Stack,Input } from "@chakra-ui/react"
  import React, {useState} from 'react';
  import Axios from 'axios';

export default function ReturnFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()
    const [video,setvideo] = useState()
    const [nvideo,setnvideo] =useState()
    const [desc,setdesc] = useState()
    const [categoria,setcategoria] = useState()

    
    


    return (
      <>
      
      <Button border="none" w="120px" h="40px" backgroundColor="#6D5DD3" onClick={onOpen} _hover={{bg:"#313aa1"}} borderRadius="10px">Upload Video</Button>
       <Modal finalFocusRef={finalRef} isOpen={isOpen} size="full" isCentered motionPreset="slideInBottom" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Configurações para Upload</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex>
            <Box flex="1" margin="20px">
              <video src={video?video:"#"} style={{width:"100%",marginBottom:"200px"}}></video>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                <Radio colorScheme="green" value="1">
                Publico
                </Radio>
                <Radio colorScheme="red" value="2">
                Privado
                </Radio>
                </Stack>
                </RadioGroup>
                <Input type="file" w="150px" border="none" onChange={event=>{
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        setvideo(reader.result);
                     }
                    reader.readAsDataURL(event.target.files[0])}}
                     accept="video/*"  m="20px 20px 0 20px" ></Input>
            </Box>
            <Box as={Flex} w="400px" flex="2" flexDirection="column">
              <Text>Nome do Vídeo:</Text>
              <Input></Input>
              <Text>Descrição:</Text>
              <Input h="200px"></Input>
              <Text>Categoria</Text>
              <Input></Input>
              <Button variant="ghost" bg={"blue.400"} mt="150px" onClick={()=>{
                  Axios.post("/api/upload",{data:{name:"teste",vid:video}})
                  .then(data=>{
                      console.log("ok "+data)
                  })
                  }} h="50px" color="black" _hover={{bg:"blue.900",color:"white"}}>Enviar</Button>
              </Box>
              </Flex>
                       
              
             
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }