import Design from './Design'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='px-4 lg:px-[70px] relative'>
        <Design />
        <div className="hero lg:pt-[5%] pt-[30%] relative z-5">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0
            ">
                <div className=' lg:basis-[45%]'>
                    <h6 className='text-lg text-white pb-3 tracking-widest'>ANIMATELY</h6>
                    <h1 className='text-5xl lg:text-7xl text-white '>Learn animation online from leading experts</h1>
                    <div className='flex gap-x-6 pt-[10%]'>
                    <Link to="/Signup"><button className='rounded-xl bg-[#d68bfb] px-6 py-4 font-medium text-zinc-900 lg:text-xl text-xs'>Sign up for free</button></Link>
                        <button className='rounded-xl bg-zinc-900 text-[#d68bfb] border border-zinc-700 font-medium px-6 py-3 lg:text-xl text-xs'>Learn more</button>
                    </div>
                </div>
                <div className=" lg:basis-[45%] relative">
                    <img src="/stock-photo-young-casual-business-woman-sitting-on-the-floor-using-stylus-pen-and-digital-tablet-working-on-2461145297 (1).jpg" alt=""style={{width: '100%'}} className='rounded-[50px] lg:h-[650px] h-[300px] object-cover object-center' />

                    <svg width={100} height={100} viewBox="0 0 438 490" className='absolute top-[10%] -left-8' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M229.889 56.1973C255.394 67.877 282.163 74.7664 305.991 89.5742C328.21 103.382 345.698 122.179 364.812 140.045C386.585 160.397 423.242 173.125 427.018 202.701C430.922 233.28 381.807 251.909 383.028 282.712C384.89 329.656 452.108 367.811 435.307 411.679C421.256 448.366 361.804 438.058 322.619 440.445C290.899 442.377 260.814 416.873 229.889 424.194C185.925 434.601 158.487 490.816 113.317 489.991C72.2956 489.242 21.6859 460.531 13.7359 420.247C4.01432 370.986 72.2336 333.872 72.5984 283.661C72.8498 249.075 25.2131 231.869 15.3456 198.723C3.11618 157.643 -9.01473 110.502 9.55018 71.8733C27.6949 34.1191 69.0136 3.14397 110.769 0.17332C155.086 -2.97966 189.488 37.6959 229.889 56.1973Z" fill="url(#paint0_linear_2_211)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_211" x1="0" y1="245" x2="438" y2="245" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F4C4F3"/>
                    <stop offset="1" stop-color="#d68bfb"/>
                    </linearGradient>
                    </defs>
                    </svg>


                    <svg width={100} height={100} viewBox="0 0 400 381" className='absolute -bottom-8 right-10' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M238.619 0C341.719 0 400 105.919 400 209.1C400 301.018 330.464 380.313 238.619 380.313C123.957 380.313 0 323.852 0 209.1C0 85.1426 114.758 0 238.619 0Z" fill="url(#paint0_linear_2_190)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_190" x1="200" y1="0" x2="200" y2="380.313" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F4C4F3"/>
                    <stop offset="1" stop-color="#d68bfb"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <svg width={50} height={50} viewBox="0 0 408 498" className='absolute bottom-20 left-20' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M214.6 14.2367C261.463 17.0193 315.334 -0.883365 351.833 28.6128C388.366 58.1361 385.799 113.682 394.692 159.776C401.69 196.046 397.573 231.359 398.078 268.293C398.693 313.331 420.155 361.463 397.982 400.682C375.188 440.998 326.282 457.739 282.455 472.802C237.011 488.42 184.647 510.937 142.093 488.629C99.174 466.13 96.1842 406.667 74.0892 363.571C57.7827 331.764 40.5608 302.467 29.2662 268.56C15.5928 227.511 -5.06793 187.365 1.13199 144.549C8.35045 94.6998 23.443 37.9316 66.4653 11.6683C109.477 -14.5884 164.282 11.249 214.6 14.2367Z" fill="url(#paint0_linear_2_224)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_224" x1="0" y1="249" x2="408" y2="249" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F4C4F3"/>
                    <stop offset="1" stop-color="#d68bfb"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
