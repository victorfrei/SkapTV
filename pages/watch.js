import React,{useState,useEffect,useRef} from 'react';
import {Box} from '@chakra-ui/react';
import {IconButton} from '@chakra-ui/react';
import {FiPlay,FiPause,FiVolume1,FiVolume2,FiVolumeX} from 'react-icons/fi'
import { Avatar,Alert,AlertIcon,Flex,Link,useColorMode,useToast, Badge,Button,useDisclosure,Text } from "@chakra-ui/react";
import {useRouter} from 'next/router'
import logout from '../components/logout';
import Axios from 'axios';

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    
  } from "@chakra-ui/react"

  import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from "@chakra-ui/react"

  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
  } from "@chakra-ui/react"



export default function watch(){
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode()
    const [nick,setNick] = useState("Nome");
    const [profile,setProfile] = useState("#");
    const [plan,setPlan] = useState("Standard");
    const [profileblob,setProfileblob] = useState("#");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const account = useDisclosure()
    const toast = useToast();
    const [videocomponent,setVideo] = useState(<video></video>);
    const [videotime,videotimeset] = useState(0);
    const [changetime,setchangetime] = useState(true);
    const [videocurrenttime,setvideocurrenttime] = useState(0);
    const [volume,setvolume] = useState(1);
    const [icon,seticon] = useState(<FiVolume2/>);
    const [formatedtime,setformatedtime] = useState("00:00");
    const initialFocusRef = React.useRef()

    const alertW = (data,duration,closable) =>{
        toast({
           description:data,
          status:"warning",
          duration: duration,
          position:"top",
          isClosable: closable
        })
      return 0;
      }

    useEffect(()=>{
       



        Axios.post("/api/verify",{key:localStorage.getItem("PublicKey")==null?"0001":localStorage.getItem("PublicKey")})
          
        .then((resp)=>{
        
        
    
        if(resp.data.valid == true){
          setNick(resp.data.values.data.Nick);
          setProfile(resp.data.values.data.Profile);
          setPlan("Standard");
          //console.clear();
        }else {
          console.clear();
          alertW(resp.data.msg,8000,true);
          setTimeout(()=>{},1000);
          router.replace("/login");
        }
        })
    
      
    },[router.pathname]);
    
    


return (<div>



<Box
        as={Flex}
        zIndex="1"
        alignItems="center"
        margin=" 0 auto"
        borderBottomRadius="20px"
        gridArea="navmenu"
        w="100%"
        h="50px"
        bg="#091613"
        position="fixed"
        justifyContent="flex-end"
        >
  <Button border="none" w="120px" h="40px" backgroundColor="#6D5DD3" _hover={{bg:"#313aa1"}} borderRadius="10px">Upload Video</Button>
    
    <Menu>
          <MenuButton>
          <Avatar cursor="pointer"  size="sm" name={nick} src={profile} margin=" 0 20px 0 20px" />
          </MenuButton>
          <MenuList bg="#091613" margin="10px 20px 0 0">
          <Flex alignItems="center" flexDirection="column">
          <Avatar onClick={onOpen} cursor="pointer" size="lg" name={nick} src={profile} />
          <Box ml="3">
          
          <Text fontWeight="bold">
          {nick}
          <Badge ml="1"  colorScheme={plan=="Premium"?"yellow":"gray"}>
          {plan}
          </Badge>
          </Text>
          
          </Box>
          </Flex>
          
                 
        <MenuDivider />
        <MenuGroup title="Perfil">
        <MenuDivider />
        <Link href={`/channel/${nick}`} ><MenuItem>Meu Canal</MenuItem></Link>
        <MenuItem onClick={account.onOpen} >Minha Conta</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Outros">
        <MenuDivider />
        <MenuItem onClick={toggleColorMode}>Mudar Para {colorMode=="light"?"Dark":"Light"} Mode</MenuItem>
        <MenuItem >Configurações</MenuItem>
        <MenuItem >Ajuda</MenuItem>
        <MenuItem onClick= {logout}>Sair</MenuItem>
        </MenuGroup>
        </MenuList>
        </Menu>


    <Modal onClose={onClose} size="md" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Mudar Avatar</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex justifyContent="center" alignItems="center" direction="column">
                <Avatar src={profile == "#" ? "https://via.placeholder.com/128": profile} name={nick} size="2xl" marginBottom="40px"></Avatar>
                <input type="file" accept="image/*" onChange={(e)=>{
                  const file = new FileReader();
                  file.onloadend= ()=>{
                      setProfileblob(file.result);
                      setProfile(file.result);
                  }
                  file.readAsDataURL(e.target.files[0]);
                  
              }}></input>
               <Alert marginTop="20px" status="warning">
              <AlertIcon />
                O avatar pode ter até no Max. 1MB
              </Alert>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button marginRight="20px" onClick={()=>{
                  Axios.post("/api/changeimage",{token:localStorage.getItem("PublicKey"), Profile:profileblob})
                  .then((data)=>{
                    if(data.status== 200){
                      localStorage.setItem("PublicKey",data.data)
                      alert("Avatar alterado!",2000,true,"success");
                    }
                    })
                   .catch((data)=>{
                     if(data){
                      alertW("A imagem é maior que 1MB!!",2000,true);
                     }
                    })
                  
                  
                  onClose();
                }}>Confirmar</Button>
                <Button onClick={()=>{
                  onClose();
                  }}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
         </Modal>
    
    
    </Box>



 <div style={{marginLeft:"40px",marginRight:"auto",width:"65%"}}>
        
        <Box w="100%">
            <video id="videowatch" src="/videos/teste.mp4" onMouseEnter={event=>{setVideo(event.target)}} onTimeUpdate={event=>{
              videotimeset(event.target.currentTime);
              if(videotime<10){
                setformatedtime(`00:0${Math.floor(videotime)}`)
              }else if(videotime<60){
                setformatedtime(`00:${Math.floor(videotime)}`)
              }else if(videotime<=70){
                if(videotime%60>=10){
                  setformatedtime(`0${Math.floor(videotime/60)}:${Math.floor(videotime%60)}`)
                }else{
                  setformatedtime(`0${Math.floor(videotime/60)}:0${Math.floor(videotime%60)}`)
                }

              }else if(videotime<600){
                const basetime = Math.floor(videotime/10)*10;
               
                if((videotime%60)>=basetime-60){
                  setformatedtime(`0${Math.floor(videotime/60)}:${Math.floor(videotime%60)}`)
                }else{
                  setformatedtime(`0${Math.floor(videotime/60)}:0${Math.floor(videotime%60)}`)
                }
              }else{
                if(videotime%60>=basetime-60){
                  setformatedtime(`${Math.floor(videotime/60)}:${Math.floor(videotime%60)}`)
                }else{
                  setformatedtime(`${Math.floor(videotime/60)}:0${Math.floor(videotime%60)}`)
                }
              }
              
              event.target.volume = volume;
              if(videocurrenttime==0){
                setchangetime(true);
              }else{
                if(changetime){
                setchangetime(false);
                event.target.currentTime = videocurrenttime;
                setvideocurrenttime(0);               
               }
               
              }
            }}></video>
            <Box d="flex" bc="white" alignItems="baseline" w="100%" p="20px"  bg="#050505">
            <IconButton variant="link" m="0 20px 0 -20px" aria-label="Play e Pause" icon={videocomponent.paused?<FiPlay/>:<FiPause/>} onClick={event=>{videocomponent.paused?videocomponent.play():videocomponent.pause()}}/>
            
            <Slider defaultValue={0} value={videotime} mr="20px" max={videocomponent.duration} focusThumbOnChange={false} onChange={value=>{videotimeset(value);setvideocurrenttime(value)}}>
            <SliderTrack>
            <SliderFilledTrack/>
            </SliderTrack>
            <SliderThumb  />
            </Slider>
            {formatedtime}
         
<Menu placement="top">
  {({ isOpen }) => (
    <>
    <MenuButton>
    <IconButton variant="link" aria-label="Volume" 
    icon={icon}/>

    </MenuButton>
      <MenuList bg="transparent" border="none" boxShadow="none" textAlign="center" minW="10%" _focus="none">
        
      <Slider position="absolute" pointerEvents="auto" defaultValue={1} max={1} step={0.1} focusThumbOnChange={false} onChange={value=>{setvolume(value);
      if(videocomponent.volume==0){
         seticon(<FiVolumeX/>);
      }else if(videocomponent.volume>0 && videocomponent.volume <=0.4){          
            seticon(<FiVolume1/>)
      }else{
            seticon(<FiVolume2/>)
      }}} focusThumbOnChange={false} orientation="vertical" minH="20">
            <SliderTrack>
              <SliderFilledTrack  bg={"blue.400"}/>
            </SliderTrack>
            <SliderThumb />
          </Slider>
      </MenuList>
    </>
  )}
</Menu>
            
            
            </Box>
            
        </Box>
        </div>
</div>)}