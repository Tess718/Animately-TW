import React from 'react';

const Footer = () => {
  const footerContent = [
    { 
      heading: 'Product', 
      content: ['Course', 'Pricing', 'FAQ', 'Blog'] 
    },
    { 
      heading: '', 
      content: ['Contact', 'Log in', 'Sign up'] 
    },
    { 
      heading: 'Admin', 
      content: ['Style guide', 'Licenses', 'Instructions', 'Changelog'] 
    },
    { 
      heading: '', 
      content: ['Components', 'Password', '404'] 
    },
  ];

  return (
    <div className='px-4 lg:px-[70px]'>
      <hr className='lg:pb-[5%] pb-[20%]' />
    <footer className="text-white lg:py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap lg:flex-row justify-between items-start">
          <h4 className='text-xl lg:text-3xl flex gap-x-4 basis-[45%] lg:basis-0 items-center'> <img src="Vector.png" alt="" className='w-10' /> Animately</h4>
          {footerContent.map((item, index) => (
            <div key={index} className='basis-[45%] lg:basis-[0%] mb-10'>
              <h2 className="text-lg font-bold mb-2 text-[#d68bfb]">{item.heading}</h2>
              <ul>
                {item.content.map((listItem, idx) => (
                  <li key={idx} className='py-4'>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between pt-14">
        <p>@ Animately 2024. All rights reserved.</p>

        <div className='flex gap-x-14'>
          <p>Built by Dev.Tess</p>
          <p>Inspired by Kevin Dakin</p>
        </div>
        </div>

      </div>
    </footer>
    </div>
  );
};

export default Footer;
