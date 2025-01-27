import Design from "../Components/Design"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div>
      <Design />
      <div className="flex lg:px-[70px] my-auto h-dvh items-center flex-col lg:flex-row justify-center lg:justify-between ">
        <div className="text-white basis-[45%] hidden lg:block">
          <h2 className="text-7xl pb-10 text-[#d68bfb] font-semibold">Master Animation <br /> with Animately</h2>
            <div className="flex items-start gap-3">
              <img src="Vector.png" alt="" width={25} />
              <div>
                <h5>Create Magic</h5>
                <p>Unlock the secrets of stunning animation as you bring your imagination to life with professional techniques and tools.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-10">
              <img src="Vector.png" alt="" width={25} />
              <div>
                <h5>Animate Brilliance</h5>
                <p>Master the art of storytelling with fluid motion and captivating visuals that leave a lasting impression.</p>
              </div>
            </div>
        </div>
        <div>

        </div>

        <div className="basis-[45%] mx-4 lg:mx-0">
          {/* <div className="flex gap-3">
            <img src="Vector.png" alt="" width={50} />
            <p className="text-white text-4xl font-semibold">Animately</p>
          </div> */}
          <form action="" className="bg-zinc-900 backdrop:blur-2xl w-full lg:p-12 p-6 py-8 rounded-[50px] border border-zinc-700 relative z-3">
            <div>
            <h3 className="text-center font-medium text-[#d68bfb] text-2xl">Create an Account.</h3>
            <p className="text-white text-center">Already have an account <Link to="/Login" className="text-[#d68bfb]">Log in</Link></p>
            <div className="flex flex-col gap-5 w-full mt-5 text-white">
              <input type="text" placeholder="Name" className="h-[45px] w-full rounded-[15px] ps-4 outline-none border border-zinc-700 bg-transparent"/>
              <input type="email" placeholder="Email Address" className="h-[45px] w-full rounded-[15px] ps-4 outline-none border border-zinc-700 bg-transparent" />
              <input type="password" placeholder="Create Password" className="h-[45px] w-full rounded-[15px] ps-4 outline-none border border-zinc-700 bg-transparent" />
              <div className="flex gap-2 text-[14px]">
                <input type="checkbox" name="" id="" /><p className="text-white">By signing up you agree to our <span className="text-[#d68bfb]">Terms of Use</span> and <span className="text-[#d68bfb]">Privacy Policy</span></p>
              </div>

              <button className="rounded-[15px] bg-[#d68bfb] h-[45px] text-white font-medium">Sign Up</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup