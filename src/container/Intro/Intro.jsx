import React, { useRef,useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
    
    const[playVideo,setPlayVideo]=useState(false)
    const vidRef=useRef();
    const handleVideo=()=>{
      setPlayVideo((previousState)=>{
        setPlayVideo(!previousState);
      })
    }
    // if(playVideo)
    //  vidRef.current.pause();
    // if(!playVideo)
    // vidRef.current.pause();

    
   

  return(
    <div className='app__video'>
    <video ref={vidRef}
     src={meal} 
     type="video/mp4"
     loop
     controls={false}
     muted
    />
    <div className='app__video-overlay flex__ceter'>
      <div className='app__video_circle-overlay flex__center' 
      onClick={handleVideo}>
        {playVideo ? (<BsPauseFill color='#fff' fontSize={30}/>) : (<BsFillPlayFill color='#fff' fontSize={30}/>)
}
      </div>
    </div> color='#fff' fontSize:''
  </div>
  )
}

export default Intro;
