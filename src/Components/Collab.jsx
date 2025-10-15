import React from 'react';

import { logos } from '../constants';



const Collab = () => {
  return (
    <div className='flex lg:flex-row lg:justify-center gap-20 mt-8 overflow-x-scroll lg:overflow-x-hidden'>
      {logos.map((icons)=>(
        <img src={icons.icon} alt="" width={150} className='object-contain' />

      ))}

    </div>
  )
}

export default Collab
