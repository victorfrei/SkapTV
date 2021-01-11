import {Grid,TabList, Tabs,Tab,Box,Flex, Input, Avatar,Heading,Button} from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Stack,
    FormLabel,
    Select,
    Textarea
  } from "@chakra-ui/react"

  import { Radio, RadioGroup } from "@chakra-ui/react"
import Axios from "axios"
import * as UpChunk from '@mux/upchunk';

export default function Studio(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const [value, setValue] = React.useState("1")
    const [file, setfile] = React.useState("")
return(
  <>
<Tabs variant="soft-rounded" colorScheme="blue">
<Grid h="100vh" templateColumns="250px 1fr" templateRows="60px 1fr" templateAreas="'navbar menu''navbar content'">

<Flex gridArea="navbar" flexDirection="column" borderRight="gray 1px solid" alignItems="center">
  <Avatar m="30px" size="xl" name="nome"></Avatar>
  <Heading>Nome</Heading>
<TabList m="30px" p="20px" w="100%" flexDirection="column">
  <Tab>Meus Vídeos</Tab>
  <Tab>Com Estrela</Tab>
  <Tab>Arquivados</Tab>
  </TabList>
  <Button colorScheme="blue" w="70%" borderRadius="10px" m="40px" onClick={onOpen}>Upload</Button>
  Logo
</Flex>
<Flex gridArea="menu" borderBottom="gray 1px solid" justifyContent="center" alignItems="center">

<Input w="50%" border="red 2px solid" ></Input>

</Flex>
<Flex gridArea="content" >


<>
        
        <Drawer
          isOpen={isOpen}
          placement="right"
          size="md"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Enviar um Vídeo
              </DrawerHeader>
  
              <DrawerBody>
                <Stack spacing="24px">
                  <Box>
                    <FormLabel htmlFor="videoname">Nome</FormLabel>
                    <Input
                      ref={firstField}
                      id="videoname"
                      placeholder="Nome do vídeo"
                    />
                  </Box>
  
                  <Box>
                    <FormLabel htmlFor="desc" >Description</FormLabel>
                    <Textarea h="180px" resize="none" id="desc" />
                  </Box>
                

                <Box>
                    <FormLabel htmlFor="categoria">Categoria</FormLabel>
                    <Select id="categoria" defaultValue="Gaming">
                      <option value="Gaming">Gaming</option>
                      <option value="Entreterimento">Entretenimento</option>
                      <option value="Educação">Educação</option>
                      <option value="Música">Música</option>
                      <option value="Blogs">Blogs</option>
                      <option value="FA">Filme ou Animação</option>
                      <option value="AV">Auto ou Veiculo</option>
                      <option value="Pets">Pets</option>
                      <option value="Esportes">Esportes</option>
                      <option value="VE">Viagens ou Eventos</option>
                      <option value="Comédia">Comédia</option>
                      <option value="NP">Noticias ou Política</option>
                      <option value="CT">Ciência e Tecnologia</option>
                      <option value="SA">Sem fins lucrativos ou Ativismo</option>
                    </Select>
                  </Box>

                  <Box>
                  <FormLabel htmlFor="upload">Video</FormLabel>
                  <Box m="20px 0">{file.name}</Box>
                  <Button as={FormLabel} id="upload" htmlFor="video">Selecionar Vídeo</Button>
                  <Input type="file" onChange={(e)=>{setfile(e.target.files[0])}} id="video" hidden={true} placeholder="Envie seus arquivos" ></Input>
                  </Box>


                  <Box>
                  <FormLabel htmlFor="visibilidade">Visibilidade</FormLabel>
                  <RadioGroup onChange={setValue}  value={value}>
                  <Stack direction="row">
                  <Radio id="visibilidade" value="1">Público</Radio>
                  <Radio value="2">Privado</Radio>
                  <Radio value="3">Não Listado</Radio>
                  </Stack>
                  </RadioGroup>
                  </Box>
                  </Stack>
              </DrawerBody>
  

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="blue" onClick={()=>{
                    Axios.get("/api/v1/upload")
                    .then((data)=>{
                        console.log(data);
                        
                        const upload = UpChunk.createUpload({
                          file,
                          // Normally this would be retrieved via an API request to an endpoint
                          // you control that would return an authenticated URL.
                          chunkSize: 5120,
                          endpoint: data.data
                        });
                        
                        upload.on('error', err => {
                          console.error('💥 🙀', err.detail);
                        });

                        upload.on('progress', progress => {
                          console.log(`So far we've uploaded ${progress.detail}% of this file.`);
                        });

                        upload.on('success', (data) => console.log('We did it, everyone! '+ data));
                      })
                    

                }}>Enviar</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>


</Flex>
</Grid>
</Tabs>
</>
)
}