import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => {
  // let try out some inline styling
return(
  <div style={{marginBottom:'1rem'}}>
    <p className='p__cormorant'>
     {title}
    </p>
    <img src={images.spoon}/>
    
  </div>
)
}
   

  


export default SubHeading;
