import { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { DataFile } from '../../utills/intefaces/files';
import { uploadFile } from '../../actions/files';

type PropsFileMultiple = {
    isOnlyImage: boolean;
    files: DataFile[],
    setFiles:  React.Dispatch<React.SetStateAction<DataFile[]>>,
    onDeleteFile: (id: number) => void,
}

export function FormFilesMultiple({isOnlyImage, files, setFiles, onDeleteFile}: PropsFileMultiple) {
  let config = {}
  if(isOnlyImage) {
    config = {
        ...config,
        accept: {
            'image/jpeg': ['.jpeg', '.png']
        }
    }
  }  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone(config);

  useEffect(() => {
    if(acceptedFiles) {
        acceptedFiles.forEach(async (file) => {
            const fileUploaded = await uploadFile(file);
            if(fileUploaded === false) {
                return;
            }
            setFiles(state => ([
                ...state,
                fileUploaded,
            ]))
        })
    }
  }, [acceptedFiles]);

  return (
    <section className="container rounded-md border-2 p-2 mt-2">
      <div {...getRootProps({className: 'dropzone flex justify-center p-4'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        {files && files.map(({id, filename}) => (
            <ul key={id} className="my-2">{filename} <button type='button' className="py-2 px-4 text-white bg-blue-500 rounded-md" onClick={() => onDeleteFile(id)}>Delete</button></ul>
        ))}
      </aside>
    </section>
  );
}

export function FormFilesSingle() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  useEffect(() => {
    if(acceptedFiles) {
        console.log(acceptedFiles)
    }
  }, [acceptedFiles]);

  return (
    <section className="container rounded-md border-2 p-2 mt-2">
      <div {...getRootProps({className: 'dropzone flex justify-center p-4'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
}