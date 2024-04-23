import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { anilist1 } from '../constants'

const Course = () => {
  AOS.init();
  return (
    <div className='px-4 lg:px-[70px] overflow-x-hidden'>
      <div className="flex flex-col lg:flex-row justify-between pt-[10%] items-center gap-y-8 lg:gap-y-0">
        <div className="basis-[50%]" data-aos="fade-right">
            <img src="https://img.freepik.com/free-photo/side-view-worker-typing-laptop_23-2149831298.jpg?t=st=1713706240~exp=1713709840~hmac=16dc4f23cb5ea26dd097994cb17a8eac6f9903f48fe031083ad379a02bbba5ff&w=740" alt="" className='w-full lg:h-[600px] h-[300px] rounded-[50px] object-cover' />
        </div>
        <div className="basis-[40%]" data-aos="fade-left">
            <h2 className='text-white lg:text-6xl text-5xl'>The best course <br /> in animation</h2>
            <p className='text-slate-50 mt-8 text-lg'>Embark on an Enlightening Journey, Fusing Artistry with Technical Proficiency, Nurturing Creativity</p>

            <div className='flex-col mt-5'>
                {anilist1.map((list, index)=>(
                    <div className='flex gap-x-2 items-center my-5' key={index}>
                        <i className={`${list.icon} text-[#d68bfb] text-3xl`}></i>
                        <p className='text-slate-50 text-lg'>{list.content}</p>
                    </div>
                ))}
                <button className='rounded-xl bg-[#d68bfb] px-6 py-4 text-zinc-900 text-lg font-medium mt-7'>View pricing</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Course
