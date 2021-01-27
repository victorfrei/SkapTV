import Plyr from 'plyr'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Select,
  Box,
  Link,
} from "@chakra-ui/react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Hls from 'hls.js';
import { Kbd } from "@chakra-ui/react"



export default function VideoModal(props) {
    const [isOpen,setisOpen] = useState(true);
    
   useEffect(()=>{
      setisOpen(true);
    },[props])


    useEffect(()=>{
      const player = new Plyr('#player',{
        autoplay:false,
        tooltips: {controls: true},
        controls:[
                'play',
                'progress',
                'current-time',
                'duration',
                'fullscreen',
                ],
    
    });
      
      const Player = document.querySelector("#player")
      let source = `https://stream.mux.com/${props.id}.m3u8`;
      
      const hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(Player);
      })
      


  return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={()=>{setisOpen(false)}}
          size="5xl"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Link href={`/watch/${props.id}`}>skap.tv/watch/{props.id}</Link></ModalHeader>
            <ModalCloseButton><Kbd>Esc</Kbd></ModalCloseButton>
            <ModalBody pb={6}>
            <Grid  templateColumns="1fr 1fr" h="340px" templateAreas="'preview edit'">

            <Flex  gridArea="preview" flexDir="column" p="20px" textAlign="start" overflow="auto">
            <Flex  m="0 auto" >
            <video style={{margin:0}}  controls id="player"></video>
            </Flex>
            <Heading m="15px 0">{props.name}</Heading>
            <Accordion defaultIndex={[-1]} allowMultiple>
            <AccordionItem>
            <AccordionButton>
            <Box m="10px 0" flex="1" textAlign="left">
                 Descrição
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            {props.desc}
            <Text>--------------------------------------------------------------</Text>
            <Text>Publicado por: {props.by}</Text> 
            <Text>Categoria: {props.cat}</Text>
            <Text>Linguagem: {props.lang}</Text>
            </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
            <AccordionButton>
            <Box m="10px 0" flex="1" textAlign="left">
                 Informações Adicionais
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Text>Visibilidade: {props.visibi}</Text> 
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
            
            </Flex>


            <Flex gridArea="edit" flexDir="column" p="40px" overflow="auto">
            <form>
              <label>Nome:</label>
              <Input defaultValue={props.name} placeholder='Nome do vídeo'></Input>
              <label>Descrição:</label>
              <Textarea defaultValue={props.desc} resize="none" height="200px" placeholder="Aqui você escreverá a descrição do vídeo." />
              <label>Categoria:</label>
              <Select defaultValue={props.cat} placeholder="Select option">
              <option value="Gaming">Gaming</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Select>
              <label>Languagem:</label>
              <Select defaultValue={props.lang} placeholder="Select option">
              <option value="PT-BR">PT-BR</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Select>
              <label>Visibilidade:</label>
              <Select defaultValue={props.visibi} placeholder="Select option">
              <option value="Público">Público</option>
              <option value="Privado">Privado</option>
              <option value="option3">Option 3</option>
              </Select>
            </form>
            </Flex>
            </Grid>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>{setisOpen(false)}} colorScheme="blue" mr={3}>
                Sair
              </Button>
              <Button>Alterar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }