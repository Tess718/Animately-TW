import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Lessons from "../Components/Lessons";
import Course from "../Components/Course";
import Succeed from "../Components/Succeed";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <Hero />
    <Lessons />
    <Course/>
    <Succeed/>
    <Footer />
    </div>
  )
}

export default Homepage