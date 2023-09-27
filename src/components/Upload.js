import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi';
import axios from 'axios'
function Uploder({setImage,setFile}) {
    const onDrop = useCallback(async (acceptedFiles)=>
    {
      
      const file = new FormData()
      file.append("file",acceptedFiles[0])
      axios.post('http://127.0.0.1:8000/upload',file)
      setFile(file)
      let url = URL.createObjectURL(acceptedFiles[0])
      setImage(url)
    })
    const {getRootProps, getInputProps,isDragActive,isDragReject} = useDropzone({
        multiple : false,
        onDrop
    });

  return (
    <div className='w-full text-center'>
      <div
      {...getRootProps()}
      className='px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-point'>

        <input {...getInputProps()}/>
        <span className='mx-auto flex-colo text-subMain text-3xl'>
            <FiUploadCloud/>
        </span>
        <em className='text-xs text-border'>
          {
            isDragActive?'Drop it like its hot':isDragReject?"or click file":"Select JPG images"
          }
        </em>
      </div>
    </div>
  )
}

export default Uploder
