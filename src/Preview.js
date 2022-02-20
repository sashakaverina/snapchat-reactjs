import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCamera } from './features/cameraSlice';
import './Preview.css';
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, Timer } from '@material-ui/icons';
import { v4 as uuid } from 'uuid';
import { db, storage } from './firebase';
import { serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";



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

    const sendPost = () => {
      const id = uuid();
      const storageRef = ref(storage, `posts/${id}`);
      const uploadTask = uploadString(storageRef, cameraImage, "data_url");

      uploadTask.on('state_changed', null, (error) => {
        console.log(error)
      }, () => {
        storage.ref('posts').child(id).getDownload()
        .then((url) => {
          db.collection('posts').add({
            imageUrl: url,
            username: "HELLO",
            read: false,
            timestamp: serverTimestamp(),
          });
          navigate('/chats');
        })
      })
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
        <div className='preview__footer' onClick={sendPost}>
          <h2>Send Now</h2>
          <Send className='preview__sendIcon' fontSize='small'/>
        </div>
    </div>
  )
}

export default Preview