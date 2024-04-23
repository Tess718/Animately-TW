import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import { succeed, testimonials, anilist } from '../constants';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Succeed = () => {
    AOS.init({
        duration: 1500,
    });
  return (
    <div className='px-4 lg:px-[70px] lg:pt-[10%] pt-[20%] overflow-x-hidden'>
      <h2 className='lg:text-6xl text-5xl text-white text-center'>Everything you need to succeed</h2>
        <div className="flex flex-col lg:flex-row justify-between pt-14 gap-y-8 lg:gap-y-0">
            {succeed.map((item, index)=>(
                <div key={index} className="rounded-[50px] bg-zinc-800 border border-zinc-700 p-8 py-14 text-center basis-[23.5%]" data-aos="fade-left">
                    <h3 className='text-6xl text-white'>{item.header}</h3>
                    <p className='text-base text-white pt-3 uppercase tracking-widest'>{item.details}</p>
                </div>
            ))}
        </div>


        <div className="flex flex-col lg:flex-row lg:pt-[10%] pt-[20%] justify-between items-center gap-y-8 lg:gap-y-0">
            <div className="basis-[45%]" data-aos="fade-right">
                <h2 className='lg:text-7xl text-5xl text-white'>Learn at your preferred pace</h2>
                <p className='text-zinc-50 pt-5'>  Tailored instruction, flexible scheduling, and self-paced modules enable personalized learning experiences suited to individual needs and schedules.</p>

                <div className='flex-col mt-5'>
                {anilist.map((list, index)=>(
                    <div className='flex gap-x-2 items-center my-5' key={index}>
                        <i className={`${list.icon} text-[#d68bfb] text-3xl`}></i>
                        <p className='text-slate-50 text-lg'>{list.content}</p>
                    </div>
                ))}
                <button className='rounded-xl bg-[#d68bfb] px-6 py-4 text-zinc-900 text-lg font-medium lg:mt-7 '>Sign up for free</button>
            </div>
            </div>
            <div className="basis-[45%]" data-aos="fade-left">
                <img src="https://img.freepik.com/premium-photo/close-up-african-man-typing-laptop-working-online_249974-8869.jpg?w=740" alt="" className='w-full lg:h-[600px] h-[300px] rounded-[50px] object-cover' />
            </div>
        </div>

        <div className='lg:pt-[10%] pt-[20%]'>
            <h2 className='text-white text-center text-6xl'>What our students say</h2>
            
            <Swiper
                dir="rtl"
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                modules={[Autoplay]}
                className="mySwiper lg:mt-16 mt-10"
                data-aos="fade-up"
            >
            {testimonials.map((item, index)=>(
                <SwiperSlide className='text-white lg:px-[10%]' key={index}>
                    <div className="rounded-[50px] p-4 bg-zinc-900 border border-zinc-700 flex flex-col-reverse lg:flex-row-reverse justify-between items-stretch">
                        
                        <div className="basis-[55%]">
                        <p className='text-zinc-50 text-left p-8 pr-0 lg:text-xl'>
                            {item.comment}
                        </p>

                        <div className="text-left pl-8">
                        <small className='text-[#d68bfb] text-lg tracking-widest'>{item.name}</small>
                        </div>
                        </div>
                        <div className='basis-[40%] w-full'>
                            <img src={item.image} alt="" className='w-full h-full rounded-[25px] object-cover' />
                        </div>
                    </div>
                </SwiperSlide>
                            
            ))}
            </Swiper>

        </div>

        <h2 className='text-center text-white lg:text-6xl text-5xl lg:pt-[10%] pt-[20%] pb-10 lg:pb-0'>Start learning <br /> animation <span className='relative'>today <img src="Frame.png" alt="" className='absolute left-0 right-0 w-full mt-3' /></span></h2>

        <div className="flex gap-x-6 justify-center pt-[4%] lg:pb-[5%] pb-[20%]">
            <button className='rounded-xl bg-[#d68bfb] px-6 py-4 font-medium text-zinc-900 lg:text-xl text-xs'>Sign up for free</button>
            <button className='rounded-xl bg-zinc-900 text-[#d68bfb] border border-zinc-700 font-medium px-6 py-3 lg:text-xl text-xs'>Learn more</button>
        </div>

    </div>
  )
}

export default Succeed
