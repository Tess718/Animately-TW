import { pricing } from '../constants'
import Navbar from '../Components/Navbar'
import Design from '../Components/Design'
import Footer from '../Components/Footer'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <Design />
        <div className='pt-10 pb-28 px-4 lg:px-[70px] max-sm:pt-24'>
            <h1 className='text-5xl lg:text-7xl text-white text-center font-semibold'>Pricing</h1>
            <p className='text-slate-300 text-center text-3xl pt-5 pb-10'>Safely collect, Process, and share your <br className='hidden md:block' /> data with the plan that&apos;s right for you.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-content-center gap-10 pt-10">
                {pricing.map((item, index) => (
                    <div key={index} className='p-10 rounded-[50px] bg-zinc-900 backdrop:blur-xl border border-zinc-700'>
                        <h5 className='text-uppercase text-white text-4xl font-medium'>{item.name}</h5>

                        <div className='text-white py-3 text-md flex gap-1 items-end'>
                            <h5 className='text-2xl'>{item.price}</h5>
                            <p className='text-slate-300'>{item.header}</p>
                            </div>


                        <p className='text-slate-300 text-lg'>{item.content}</p>

                        <hr className='my-10' />

                        <div className="flex flex-col gap-3 text-slate-300 text-sm h-[170px]">
                            {item.list.map((listItem, idx) => (
                                <div key={idx} className='flex gap-3'><i className={listItem.icon}></i>{listItem.content}</div>
                            ))}
                        </div>
                        
                        <button className='text-black bg-white font-medium py-2 px-6 rounded-full'>{item.button}</button>
                        
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Pricing