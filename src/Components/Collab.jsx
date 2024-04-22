import React from 'react';
import './Collab.css';

const logos = [
    { icon:'https://www.gobio.com/wp-content/uploads/2020/12/light-logo-04.png'},
    { icon:'https://luxeliving.in/wp-content/uploads/2022/12/partner4.png'},
    { icon:'https://www.gobio.com/wp-content/uploads/2020/12/light-logo-04.png'},
    { icon:'https://luxeliving.in/wp-content/uploads/2022/12/partner4.png'},
    { icon:'https://www.gobio.com/wp-content/uploads/2020/12/light-logo-04.png'},
]

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
