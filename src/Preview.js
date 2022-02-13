import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCamera } from './features/cameraSlice';
import './Preview.css';
import { Close } from '@material-ui/icons';

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
        <img src={cameraImage} alt=''/>
    </div>
  )
}

export default Preview