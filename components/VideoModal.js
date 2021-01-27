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
import InputUpload from './inputUpload';



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
                'current-time',
                'duration',
                'fullscreen',
                ],
    
    });
      
      const Player = document.querySelector("#player")
      let source = `https://stream.mux.com/iR6Obl01MDsmSbl2H9COoFXhsWKeyctO2VYA91UV1Xnc.m3u8`;
      
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
            <ModalHeader>Configurações de Envio</ModalHeader>
            <ModalCloseButton><Kbd>Esc</Kbd></ModalCloseButton>
            <ModalBody pb={6}>
            <Grid  templateColumns="1fr 1fr" h="340px" templateAreas="'preview edit'">
            <Flex  gridArea="preview" flexDir="column" p="20px" textAlign="start" overflow="auto">
            <Box>
            <Flex justifyContent="center" h="300px" border="1px dashed white" borderRadius="20px" alignItems="center">
            <InputUpload/>
            </Flex>
            <Box hidden="true">
            <Flex  m="0 auto" >
            <video style={{margin:0}}  constrols id="player"></video>
            </Flex>
            <Heading>Nome do vídeo</Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="left">
                 Descrição
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            <Text>--------------------------------------------------------------</Text>
            <Text>Categoria: Gaming - Linguagem: PT-BR</Text>
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <Text>Publicado por</Text> - <Text>Visibilidade</Text> -
            </Box>
            </Box>
            </Flex>
            <Flex gridArea="edit" flexDir="column" p="40px" overflow="auto">
            <form>
              <label>Nome:</label>
              <Input placeholder='Nome do vídeo'></Input>
              <label>Descrição:</label>
              <Textarea resize="none" height="200px" placeholder="Aqui você escreverá a descrição do vídeo." />
              <label>Categoria:</label>
              <Select placeholder="Select option">
              <option value="option1">Gaming</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Select>
              <label>Languagem:</label>
              <Select placeholder="Select option">
              <option value="option1">PT-BR</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Select>
              <label>Visibilidade:</label>
              <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Select>
            </form>
            </Flex>
            </Grid>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Cancelar
              </Button>
              <Button>Pronto</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }