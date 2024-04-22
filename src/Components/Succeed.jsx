import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const succeed = [
    {header: '72', details: 'lessons'},
    {header: '30+', details: 'hours'},
    {header: '14', details: 'mentors'},
    {header: '8k+', details: 'students'},
]

const anilist = [
    {icon:'bi bi-check-circle-fill', content: 'Lorem ipsum dolor sit amet consectetur'},
    {icon:'bi bi-check-circle-fill', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime dolor repellendus vel ipsa sint eius?'},
    {icon:'bi bi-check-circle-fill', content: 'Lorem ipsum dolor sit amet.'}
]

const testimonials = [
    {name:'Jess Gong, WEBFLOW', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a perferendis suscipit totam error quibusdam voluptatibus nulla expedita maiores debitis quod quisquam consequuntur repellendus, enim mollitia ducimus minus dicta vitae placeat? Minima, animi porro totam nemo aliquid nulla corrupti dolorem.', image:'https://img.freepik.com/free-photo/portrait-smiley-businesswoman-working_23-2148816851.jpg?t=st=1713729467~exp=1713733067~hmac=6f8e7e215d710e2c6b1a98daeca62978bf6d7cde9f6d89a97f559110414b5c02&w=740'},
    {name:'Ivan Creed, CREEDTECH', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a perferendis suscipit totam error quibusdam voluptatibus nulla expedita maiores debitis quod quisquam consequuntur repellendus, enim mollitia ducimus minus dicta vitae placeat? Minima, animi porro totam nemo aliquid nulla corrupti dolorem.', image:'https://img.freepik.com/free-photo/handsome-afro-american-guy-sitting-cafeteria-front-opened-laptop-keyboarding-searching-internet-drinking-coffee-dark-skinned-young-male-student-preparing-classes-cafeteria_273609-483.jpg?t=st=1713728153~exp=1713731753~hmac=af060f4ad13d7ad566c1d786e6ca26f428fd6be17f98a96d48da840d5ab780e2&w=740'},
    {name:'John Doe, IDAN', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, a perferendis suscipit totam error quibusdam voluptatibus nulla expedita maiores debitis quod quisquam consequuntur repellendus, enim mollitia ducimus minus dicta vitae placeat? Minima, animi porro totam nemo aliquid nulla corrupti dolorem.',image:'https://img.freepik.com/free-photo/businessman-working-laptop_23-2148634765.jpg?t=st=1713729415~exp=1713733015~hmac=d5223dff40d9ebb84eda83ee80a726e658571f199d0051568fde28dbcfe8eb22&w=740'},
]

const Succeed = () => {
  return (
    <div className='px-4 lg:px-[70px] lg:pt-[10%] pt-[20%]'>
      <h2 className='lg:text-6xl text-5xl text-white text-center'>Everything you need to succeed</h2>
        <div className="flex flex-col lg:flex-row justify-between pt-14 gap-y-8 lg:gap-y-0">
            {succeed.map((item, index)=>(
                <div key={index} className="rounded-[50px] bg-zinc-800 border border-zinc-700 p-8 py-14 text-center basis-[23.5%] lg:h-[600px] h-[300px]">
                    <h3 className='text-6xl text-white'>{item.header}</h3>
                    <p className='text-base text-white pt-3 uppercase tracking-widest'>{item.details}</p>
                </div>
            ))}
        </div>


        <div className="flex flex-col lg:flex-row lg:pt-[10%] pt-[20%] justify-between items-center gap-y-8 lg:gap-y-0">
            <div className="basis-[45%]">
                <h2 className='lg:text-7xl text-5xl text-white'>Learn at your preferred pace</h2>
                <p className='text-zinc-50 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt, magni cumque repellat nam numquam?</p>

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
            <div className="basis-[45%]">
                <img src="https://img.freepik.com/premium-photo/close-up-african-man-typing-laptop-working-online_249974-8869.jpg?w=740" alt="" className='w-full h-[600px] rounded-[50px] object-cover' />
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
            >
            {testimonials.map((item, index)=>(
                <SwiperSlide className='text-white lg:px-[10%]' key={index}>
                    <div className="rounded-[50px] p-4 bg-zinc-900 border border-zinc-700 flex flex-col-reverse lg:flex-row-reverse justify-between items-stretch">
                        
                        <div className="basis-[55%]">
                        <p className='text-zinc-50 text-left p-8 pr-0 text-xl'>
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
