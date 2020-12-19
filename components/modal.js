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
    Progress,
  } from "@chakra-ui/react";
  import { Radio, RadioGroup,Flex,Text,Stack,Input } from "@chakra-ui/react"
  import React, {useState} from 'react';
  import AWS from 'aws-sdk'
 
    
           
import { createStandaloneToast } from "@chakra-ui/react"
import Axios from "axios";

const toast = createStandaloneToast()      
             
export default function ReturnFocus(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()
    const [video,setvideo] = useState()
    const [nvideo,setnvideo] =useState()
    const [desc,setdesc] = useState()
    const [categoria,setcategoria] = useState()
    const [rawvideo,setrawvideo] = useState()
    const [progress,setprogress] = useState(0)


    

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
                    setrawvideo(event.target.files[0]);
                }} accept="video/*"  m="20px 20px 0 20px" ></Input>
            </Box>
            <Box as={Flex} w="400px" flex="2" flexDirection="column">
              <Text>Nome do Vídeo:</Text>
              <Input onChange={event=>{setnvideo(event.target.value)}} ></Input>
              <Text>Descrição:</Text>
              <Input onChange={event=>{setdesc(event.target.value)}} h="200px"></Input>
              <Text>Categoria</Text>
              <Input onChange={event=>{setcategoria(event.target.value)}} ></Input>
              
              <Button variant="ghost" bg={"blue.400"} mt="150px" onClick={(event)=>{
                event.target.disabled = true;
                onClose();
                 AWS.config.region = 'us-east-1'; // Region
                 AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                     IdentityPoolId: 'us-east-1:7b6ee8c8-3d33-4e1e-81ac-6d9a51b41028',
                 });
                 
                 Axios.post("/api/uploadvideo",{Update:false,name:props.name,nvideo:nvideo,desc:desc,categoria:categoria})
                 .then(data=>{
                  toast({
                    title: nvideo,
                    description: "O upload começou. Não feche essa guia até o upload finalizar!",
                    status: "success",
                    position:"bottom-right" ,
                    duration: 10000,
                    isClosable: true,
                  })
                  const S3 = new AWS.S3({region:"sa-east-1"});
                  const params={
                      ACL:"public-read",
                      Bucket:"vid-skap",
                      Key:`${props.name}/${data.data._id}.mp4`,
                      Body: rawvideo,
                      ContentType:"video/mp4",
                      ContentLanguage:"Portuguese"
                  }
              
                  const options={partSize: 10 * 1024*1024*1024}
                  
                 S3.upload(params,options,(err,data)=>{
                   if(data){
                    console.log(data)
                  Axios.post("/api/uploadvideo",{Update:true,name:data.Key.split("/")[1],url:data.Location})
                  .then(data=>{
                   toast({
                     title: nvideo,
                     description: "Upload Finalizado!",
                     status: "success",
                     position:"bottom-right" ,
                     duration: 10000,
                     isClosable: true,
                   })
                  })
                }
                    console.log("err "+err+" data "+JSON.stringify(data));
               
                 }).on("httpUploadProgress",progress=>{
                   console.log(progress.loaded/progress.total*100)
                   setprogress(progress.loaded/progress.total*100)
                  });
                
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