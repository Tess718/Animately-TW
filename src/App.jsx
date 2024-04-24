import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Lessons from "./Components/Lessons";
import Course from "./Components/Course";
import Succeed from "./Components/Succeed";
import Footer from "./Components/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

export default function App() {
  AOS.init();
  return (
    <>
    <Helmet>
      <meta name="description" content="Animately: Your destination for creating stunning animations effortlessly." />
    </Helmet>
    <Navbar/>
    <Hero />
    <Lessons />
    <Course/>
    <Succeed/>
    <Footer />
    </>
  )
}