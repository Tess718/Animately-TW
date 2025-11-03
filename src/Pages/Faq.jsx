import React from 'react';
import Accordion from '../Components/Accordion';
import { div } from 'framer-motion/client';
import Design from '../Components/Design';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { faqitems } from '../constants';



export default function Faq() {
  return (
    <div>
        <Navbar />
        <Design />
        <div className='px-5 md:px-[70px] py-10 max-sm:pt-24'>
          <h2 className='text-white lg:text-7xl text-5xl font-semibold'>Frequently <br /> asked questions</h2>
          <div className='pb-20 flex md:flex-row flex-col justify-between gap-20 md:mt-10'>
            <div className='basis-2/3'>
              <div className="max-full mt-8 z-30">
              <Accordion
                  items={faqitems}
                  multiOpen={false}
                  allowAllClosed={true}
                  // className="bg-zinc-900 backdrop-blur-xl border border-zinc-700 rounded-lg shadow-sm"
                  headerClass="font-medium text-white"
                  contentClass="text-slate-300"
              />
              </div>
            </div>

            <div className='basis-1/3 bg-zinc-900 backdrop-blur-xl border border-zinc-700 rounded-2xl p-10 flex flex-col justify-evenly items-center text-center gap-6'>

              <i className="bi bi-chat-left-fill text-zinc-700 text-4xl"></i>

              <div>
              <h4 className='text-white text-xl'>Do you have more questions?</h4>

              <p className='text-slate-300 pt-5'>
                Feel free to contact us anytime with your questions or concerns, and our team will gladly assist you.
              </p>

              </div>
              <Link to="/Contact">
                <button className='px-8 py-3 text-black text-sm font-semibold rounded-lg bg-[#d68bfb]'>Send us a message</button>
              </Link>
            </div>

          </div>

        </div>

        <Footer />
    </div>
  );
}
