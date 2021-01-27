import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {createUpload} from '@mux/upchunk';
import Axios from 'axios';
import { CircularProgress, CircularProgressLabel, Flex } from "@chakra-ui/react"
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function InputUpload() {
    const [uploading,setuploading] = useState(<p>Drag 'n' drop some files here, or click to select files</p>)


  const onDrop = useCallback(Files => {
         
          if(Files[0].type=="video/mp4"){
          
            Axios.get("/api/v2/user/upload")
            .then((data)=>{
                console.log(data.data);
            const file = Files[0];
            const upload = createUpload({
             file,
             endpoint: data.data.url
             });
              
             upload.on('success', (e) => {console.log('Enviado');console.log(e);console.log(e.target);});
             upload.on('progress',(e)=>{console.log(e.detail);setuploading(
             <Flex justifyContent="center" alignItems="center">
                 <CircularProgress size="60%" value={e.detail} color="green.400">
                 <CircularProgressLabel fontSize="30px">{`${Math.round(e.detail)}%`}</CircularProgressLabel>
                </CircularProgress>
           </Flex>);
            })
        })
        }
        
      });


  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <FaCloudUploadAlt size="80px"/> :
          uploading
          
      }
      
    </div>
  )
}