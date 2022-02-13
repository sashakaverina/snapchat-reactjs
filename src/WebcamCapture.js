import Webcam from 'react-webcam';
import React, { useCallback, useRef, useState } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: 'user'
}

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
  

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
    }, [dispatch, webcamRef]);

    return <div className='webcamCapture'>
        <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
        />
        <RadioButtonUncheckedIcon className='webcamCapture__button'
        onClick={capture}
        fontSize="large"/>
   
    </div>;
}

export default WebcamCapture;
