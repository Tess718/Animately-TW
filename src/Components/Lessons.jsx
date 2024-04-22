import React from 'react'
import Collab from './Collab'

const card =[
  {name: 'MODULE 1', header: 'Principles', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem unde consequuntur!', image: 'Vector.png'},
  {name: 'MODULE 2', header: 'Basic', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem unde consequuntur!', image: 'Vector.png'},
  {name: 'MODULE 3', header: 'Advanced', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem unde consequuntur!', image: 'Vector.png'},


]

const Lessons = () => {
  return (
    <div className='px-4 lg:px-[70px] lg:pt-[10%] pt-[20%] pb-11'>
      <h2 className='text-white text-center lg:text-7xl text-5xl'>Interactive online <br /> lessons at <br /> <span className='relative'>your pace <img src="Frame.png" alt="" className='absolute left-0 right-0 w-full mt-3' /></span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-x-[20px] lg:pt-[7%] pt-[15%] pb-[5%] gap-y-8">
      {card.map((item, index) => (
        <div key={index} className="p-10 rounded-[50px] py-20 bg-zinc-900 border border-zinc-700">
          <img src={item.image} alt="why" className='w-[60px] pb-8' />
          <h2 className='text-sm text-[#d68bfb] tracking-widest'>{item.name}</h2>
          <h3 className='text-5xl pt-5 pb-8 text-white'>{item.header}</h3>
          <p className='text-lg text-slate-50 pr-5'>{item.content}</p>
        </div>
      ))}
      </div>
      <div className="text-center">
        <button className='bg-[#d68bfb] text-slate-900 px-6 py-3 font-semibold rounded-xl mt-8 lg:mt-0'>Learn more about this course</button>
      </div>

      <div className='pt-[10%]'>
        <p className='uppercase text-center text-zinc-50 tracking-widest'>Educating industry leaders</p>
        <Collab/>
      </div>
    </div>
  )
}

export default Lessons
