import Design from '../Components/Design'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="md:px-[70px] px-4">
            <Design />
            <div className="flex gap-10 items-center pb-24 pt-10 md:flex-row flex-col">
                <div className='basis-1/2'>
                    <h5 className='uppercase text-[#d68bfb]'>we&apos;re here to help you</h5>
                    <h2 className='text-white md:text-5xl text-3xl py-5'>Discuss Your <br className='hidden md:block' /> Animation <br className='hidden md:block' /> Solution Needs</h2>
                    <p className='text-slate-300'>Are you looking for top-quality animation solutions tailored <br /> to your needs? Reach out to us.</p>

                    <div className="flex items-center gap-5 mt-10">
                        <i className="bi bi-envelope-fill text-[#d68bfb] text-4xl"></i>
                        <div className="flex flex-col text-slate-300">
                            <h5 className='text-xs'>E-mail</h5>
                            <p className='text-lg'>animately@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mt-10">
                        <i className="bi bi-envelope-fill text-[#d68bfb] text-4xl"></i>
                        <div className="flex flex-col text-slate-300">
                            <h5 className='text-xs'>Phone Number</h5>
                            <p className='text-lg'>+234 - 419 - 6967</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-[50px] bg-zinc-900 border-blur-xl w-full p-10 text-white border border-zinc-700 basis-1/2">
                    <form action="" className='flex flex-col gap-5'>
                        <label htmlFor="name"> Name</label>
                        <input type="text" name='name' className='rounded-lg p-3 outline-none border border-zinc-700 bg-transparent' />
                        <label htmlFor="email"> Email</label>
                        <input type="email" name='email' className='rounded-lg p-3 outline-none border border-zinc-700 bg-transparent' />

                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id="" rows={5} className='rounded-lg p-3 outline-none border border-zinc-700 bg-transparent'></textarea>

                        <button className='w-fit bg-[#d68bfb] py-3 px-5 outline-none rounded-lg text-black'>Send Message</button>
                    </form>
                </div>

            </div>
        </div>

        <Footer />
        
    </div>
  )
}

export default Contact