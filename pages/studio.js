import {Grid,TabList, Tabs,Tab,Box,Flex, Input, Avatar,Heading,Button, Text} from "@chakra-ui/react"
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
    Textarea,
    Link
  } from "@chakra-ui/react"

  import { Radio, RadioGroup } from "@chakra-ui/react"
import Axios from "axios"
import * as UpChunk from '@mux/upchunk';
import {useSession } from "next-auth/client";

export default function Studio(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const [value, setValue] = React.useState("1")
    const [file, setfile] = React.useState("")
    const [Nome, setNome] = React.useState("")
    const [Desc, setDesc] = React.useState("")
    const [Cat, setCat] = React.useState("Gaming")
    const [Public, setpublic] = React.useState(true)
    const [session, loading] = useSession();

return(
  <>
  {session &&
<Tabs variant="soft-rounded" colorScheme="blue">
<Grid h="100vh" templateColumns="250px 1fr" templateRows="60px 1fr" templateAreas="'navbar menu''navbar content'">

<Flex gridArea="navbar" flexDirection="column" borderRight="gray 1px solid" alignItems="center">
  <Avatar m="30px" size="xl" name={session.user.name} src={session.user.image}></Avatar>
  <Heading>{session.user.name}</Heading>
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
                      onChange={(e)=>{setNome(e.target.value)}}
                      id="videoname"
                      placeholder="Nome do vídeo"
                    />
                  </Box>
  
                  <Box>
                    <FormLabel htmlFor="desc" >Description</FormLabel>
                    <Textarea h="180px" onChange={(e)=>{setDesc(e.target.value)}} resize="none" id="desc" />
                  </Box>
                

                <Box>
                    <FormLabel htmlFor="categoria">Categoria</FormLabel>
                    <Select id="categoria" onChange={(e)=>{setCat(e.target.value)}} defaultValue="Gaming">
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
                  <Radio id="visibilidade" onSelect={(e)=>{setpublic(true)}} value="1">Público</Radio>
                  <Radio value="2" onSelect={(e)=>{setpublic(false)}}>Privado</Radio>
                  <Radio value="3" onSelect={(e)=>{setpublic(false)}}>Não Listado</Radio>
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
                    Axios.get("/api/v1/upload?getlink=true")
                    .then((data)=>{
                        console.log(data);
                        
                        const upload = UpChunk.createUpload({
                          file,
                          // Normally this would be retrieved via an API request to an endpoint
                          // you control that would return an authenticated URL.
                          chunkSize: 5120,
                          endpoint: data.data.url
                        });
                        
                        upload.on('error', err => {
                          console.error('💥 🙀', err.detail);
                        });

                        upload.on('progress', progress => {
                          console.log(`So far we've uploaded ${progress.detail}% of this file.`);
                        });

                        upload.on('success', () => {
                        console.log('We did it, everyone! ')
                        Axios.post("/api/v1/upload?getlink=false",{id:data.data.id})
                          .then((data)=>{
                            Axios.post(`/api/v1/db-upload?perm=true`,{
                              spS_Nome:Nome,
                              spS_Thumbnail: data.data.playback_ids[0].id,
                              spS_Description:Desc,
                              spS_Category:Cat,
                              spS_PostedBy:"Alpha Preview",
                              spS_Public:Public})
                            
                          })
                          
                      })
                    

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

}
{!session && <>
  <Flex flexDirection="column" h="100vh" justifyContent="center" padding="5px" alignItems="center">
  <Text fontSize="30px" margin="10px"><strong>Acesso Negado!</strong></Text>
  <h3 fontSize="15px" margin="10px">Você necessita está logado para utilizar o studio.</h3>
  <Link href="/login" margin="10px"><Button>Ir para página de login</Button></Link>
  </Flex>


</>
}
</>
)
}