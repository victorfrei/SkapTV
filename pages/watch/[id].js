import Plyr from 'plyr';
import { useEffect} from 'react';
import Hls from 'hls.js';
import { Grid, Box, Tabs } from '@chakra-ui/react';
import Navmenu from '../../components/navmenu';

<head>
<script src="https://cdn.plyr.io/3.6.3/plyr.js"></script>
</head>

export function getServerSideProps(context){
    return {props:{id:context.query.id}}
}



export default function watch(props){
useEffect(()=>{    
const player = new Plyr('#player',{
    previewThumbnails:{
        enabled: true,
        src:`https://image.mux.com/${props.id}/storyboard.vtt`
    },
    autoplay:true,
    tooltips: {controls: true},
    controls:[
            'rewind',
            'play',
            'fast-forward',
            'current-time',
            'progress', 
            'duration',
            'pip',
            'mute',
            'volume',
            'captions',
            'settings',
            'airplay', 
            'fullscreen',
            ],  
        seekTime: 5,

});
const Player = document.querySelector("#player")
let source = `https://stream.mux.com/${props.id}.m3u8`;
if(props.id){
const hls = new Hls();
hls.loadSource(source);
hls.attachMedia(Player);
}

})

if(props.id){
return(
    
<Box>
<Tabs h="40px" >
<Navmenu navmenu={false}></Navmenu>
</Tabs>
<Box className="player-watch">
<video controls id="player"/>
</Box>
</Box>
)
}else{
    return(
    <Box>
        <Tabs h="40px" >
        <Navmenu navmenu={false}></Navmenu>
        </Tabs>
    <video id="player"></video>
    </Box>
    )
}



}