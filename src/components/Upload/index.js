import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        { ({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer
            { ... getRootProps()}
            isDragActive={isDragActive} /* mouse passando por cima indicando verde */
            isDragReject={isDragReject} /* passando arquivo que não é img */
          >
            <input { ... getInputProps()} />  

              Jogue seus arquivos aqui
          </DropContainer>

        ) }
      </Dropzone>
    );
  }
}
