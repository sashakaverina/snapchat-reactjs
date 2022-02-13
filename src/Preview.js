import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCamera } from './features/cameraSlice';
import './Preview.css';
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, Timer } from '@material-ui/icons';
import { TextField } from '@material-ui/core';

function Preview() {
    const cameraImage = useSelector(selectCamera);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    useEffect(() => {
      if (!cameraImage) {
         navigate('/')
      }
    }, [navigate, cameraImage])

    const closePreview = () => {
      dispatch(resetCameraImage());
      navigate('/')
    }

  return (
    <div className='preview'>
        <Close onClick={closePreview} className='preview__close' />
        <div className='preview__toolbarRight'>
          <Create/>
          <Note/>
          <MusicNote/>
          <AttachFile/>
          <Crop/>
          <Timer/>

        </div>

        <img src={cameraImage} alt=''/>
        <div className='preview__footer'>
          <h2>Send Now</h2>
          <Send className='preview__sendIcon' fontSize='small'/>
        </div>
    </div>
  )
}

export default Preview