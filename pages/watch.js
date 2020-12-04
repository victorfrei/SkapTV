import React from 'react';
import {Box} from '@chakra-ui/react';
import {IconButton} from '@chakra-ui/react';
import {FiPlay,FiPause,FiVolume2} from 'react-icons/fi'
import { color } from '@chakra-ui/react';




export default function watch(){



    return <div style={{marginLeft:"40px",marginRight:"auto"}}>
        
        <Box w="65%">
            <video src="test.mp4" >Olá, Mundo</video>
            <Box d="flex" bc="white" pos="absolute" alignItems="baseline" w="65%" mt="-40px">
            <IconButton variant="link" aria-label="Play" icon={<FiPlay ></FiPlay>}/>
            <IconButton variant="link" aria-label="Pause" icon={<FiPause/>}/>
            <IconButton variant="link" aria-label="Volume" icon={<FiVolume2/>}/>
            
            </Box>
            
        </Box>
        </div>
}