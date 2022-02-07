import Webcam from 'react-webcam';
import React, { useCallback, useRef } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonChecked';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: 'user'
}

function WebcamCapture() {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);

    }, [webcamRef]);

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
        onClick={capture}/>
    </div>;
}

export default WebcamCapture;
